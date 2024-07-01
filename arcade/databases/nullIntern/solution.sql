function solution(coins, quantity) {
    const table = new Set();
    table.add(0);
    
    /* Iterate over all the quantities */
    for ( let i = 0; i < quantity.length; i++ ) {
        /* Create current sums */
        const sums = [...table];
        
        /* Iterate from 1 to up until the quantity value */ 
        for (let j = 1; j <= quantity[i]; j++) {   
            /* Iterate over all previous sums */ 
            for (let k of sums) {  
                /* Add the sum element plus the quantity times coins */
                table.add(k + j * coins[i])
            }
        }
    }
    
    return table.size-1;
}