function solution(inputString) {    let parantheses = reverseInnerMost(inputString)        if (checkParantheses(parantheses)){        return solution(parantheses);    }else{        return parantheses;    }}function checkParantheses(str){    str = str.split('')    let hasParentheses = false;    str.map(c=>{        if ( c === ')' || c === '(' ){            hasParentheses = true        }    })    return hasParentheses;}function reverseInnerMost(str){    let phrase = str.split('');        let firstPar = 0;    let lastPar = 0;    for ( let i = 0; i < phrase.length; i++ ){        if ( phrase[i] === '(' ){            firstPar = i;        }        if ( phrase[i] === ')' ){