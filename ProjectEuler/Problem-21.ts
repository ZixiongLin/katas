let amicacles = new Set();
const LIMIT = 10000
for(let i = 1; i<LIMIT;i++){
    if(amicacles.has(i)){continue}
    const a = i;
    let ADivisors = []
    for(let d = 1; d<=a/2;d++){
        if(a % d == 0){
            ADivisors.push(d);
        }
    }
    let b = ADivisors.reduce((acc,current) => {
        return acc + current
    },0)
    let BDivisors = []
    for(let d = 1; d<=b/2;d++){
        if(b % d == 0){
            BDivisors.push(d);
        }
    }

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