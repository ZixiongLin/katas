let amicacles = new Set();
const LIMIT = 10000

/**
 * @param n  less and equals number limit
 * @returns array divisors of n (integers)
 */
const findDivisors = (n) => {
    let result = []
    for(let d = 1; d<=n/2;d++){
        if(n % d == 0){
            result.push(d);
        }
    }
    return result
}

for(let i = 1; i<LIMIT;i++){
    if(amicacles.has(i)){continue}
    const a = i;
    let ADivisors = findDivisors(a)

    let b = ADivisors.reduce((acc,current) => {
        return acc + current
    },0)
    let BDivisors = findDivisors(b)

    let temp = BDivisors.reduce((acc,current) => {
        return acc + current
    },0)
    if(temp == a && a!= b){
        amicacles.add(a)
        amicacles.add(b)
    }
}

const amicaclesMapped = [...amicacles].reduce((acc,current) => {
    return acc + current
},0)
console.log(amicaclesMapped)