function solution(comb1, comb2) {    let minLen = 32;    let arr1 = comb1.split('');    let arr2 = comb2.split('');    let biggerCombLength = comb1.length > comb2.length ? comb1.length : comb2.length;    let bothCombLength = comb1.length + comb2.length;        // Fill array with null values    for ( let i = 0; i < comb1.length; i++ ) {        arr2.push(null);    }    for ( let i = 0; i < comb2.length; i++ ) {        arr1.push(null);        arr1.unshift(null);        arr2.push(null);    }        for ( let shifts = 0; shifts < (arr1.length + arr2.length); shifts++ ) {        let isFitting = true;                let disp1 = arr1.map(a=>{             if ( a === null ) return '_';            return a;        })        let disp2 = arr2.map(a=>{             if ( a === null ) return '_';            return a;        })                    for ( let i = 0; i < arr1.length; i++ ) {