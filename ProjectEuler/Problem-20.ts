const LIMIT = 100;
let factorial = BigInt(1);

for(let i = 1; i<=LIMIT;i++){
    factorial*=BigInt(i)
}

let factorialString = BigInt(factorial).toString();
console.log(factorialString)
// let result = factorialString.split('').filter(s => s!= '0').reduce((acc, current) => {
//     return acc + Number(current)
// },0)
let result = 0;
for (const c of factorialString) {
    result += parseInt(c)
}

console.log(result)
