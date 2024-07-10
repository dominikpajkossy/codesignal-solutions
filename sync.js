import 'dotenv/config';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import prettier from 'prettier';
import pluginSql from 'prettier-plugin-sql';


/* Test context */
let browser;
let context;
let page;
const loginUrl = 'https://app.codesignal.com/login';
const solutionsUrl = `https://app.codesignal.com/profile/${process.env.CODESIGNAL_USER_USERNAME}/tasks`
const PLAYWRIGHT_TIMEOUT = 30 * 60 * 1000; /* 30 minutes */

const getFormattedCode = async (taskCode, taskType) => {
    let extension;
    let parser;
    let taskCodeFormatted;

    try {
        switch (taskType) {
            case null:
                extension = 'sql';
                parser = 'sql';
                break;
            case 'JavaScript':
                extension = 'js';
                parser = 'babel';
                break;
            default:
                extension = 'py';
                break;
        }
    
        taskCodeFormatted = parser ? (await prettier.format(taskCode, { parser, plugins: [pluginSql] })) : taskCode;
    } catch (err) {
        console.error('Error formatting code: ', err);
        taskCodeFormatted = taskCode;
    }

    return {
        extension,
        taskCodeFormatted
    }
}

const saveTask = async (page) => {
    try {
        const taskTitle = await page.locator('.task-title--header').textContent();
        console.info(`${taskTitle} started!`);
    
        console.info('Getting description...');
        const taskDescription = await page.locator('.markdown').first().textContent();

        console.info('Getting url...');
        const taskCategory = page.url().split('/')[3];
        
        console.info('Getting language type...');
        const taskType = await page.getByTestId('language-selector').textContent({timeout: 3000}).catch(() => null);

        console.info('Getting solution...');
        await page.getByLabel('Solutions').click();
        await page.getByRole('button', { name: 'All users' }).click();
        await page.getByRole('option', { name: 'Me' }).click();
        await page.getByRole('gridcell', { name: '1' }).first().click();
        const taskCode = await page.locator('.view-lines').textContent();

        console.info('Formatting code...');
        const {extension, taskCodeFormatted} = await getFormattedCode(taskCode, taskType);
    
        console.info('Creating path and saving solution...');
        const path = (`./solutions/${taskCategory}/${taskTitle}`).replace('?', '');

        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
        }
    
        fs.writeFileSync(`${path}/solution.${extension}`, taskCodeFormatted);
        fs.writeFileSync(`${path}/README.md`, taskDescription);
    
        console.info(`${taskTitle} saved!`);
        console.info('---------------------------------');
    } catch (err) {
        console.error('Error saving task: ', err);
    }
}


(async () => {
    chromium.use(stealth());
    browser = await chromium.launch({
      headless: true,
      timeout: PLAYWRIGHT_TIMEOUT,
    });
    context = await browser.newContext();
    page = await context.newPage();

    
    /* Navigate to login */
    await page.goto(loginUrl);

    /* Input login details */
    await page.getByTestId('username').click();
    await page.getByTestId('username').fill(process.env.CODESIGNAL_USER_LOGIN);
    await page.getByTestId('password').click();
    await page.getByTestId('password').fill(process.env.CODESIGNAL_USER_PASSWORD);

    /* Click login */
    await page.getByTestId('signup').click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
    
    /* Navigate to solutions */
    await page.goto(solutionsUrl);

    /* Navigate to first task */    
    let isNextPageEnabled = true;
    while (isNextPageEnabled) {
        for (let i = 0; i < 10; i++) {
            
            const modifierKey = process.platform === 'darwin' ? 'Meta' : 'Control';
            await page.keyboard.down(modifierKey);
            const [newPage] = await Promise.all([
                context.waitForEvent('page'),
                page.locator('.card-task-link').nth(i).click(), // Opens a new tab
            ])
            await page.keyboard.up(modifierKey);
            await newPage.waitForLoadState('domcontentloaded');
            await newPage.waitForTimeout(6000);
            await saveTask(newPage);
            await newPage.close();
        }

        const goToNextPageBtn = page.getByLabel('Go to the next page');
        /* We must go back to the page we want by clicking the next page button */
        await goToNextPageBtn.click();

        /* Check if next page is enabled */
        isNextPageEnabled = !(await goToNextPageBtn.evaluate(
            (element, className) => element.classList.contains(className),
            '.-disabled'
        ));
    }
    
    /* Make sure to await close, so that videos are saved. */
    await context.close();
    await browser.close();
})();



