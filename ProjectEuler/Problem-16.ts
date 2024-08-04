let value = BigInt(Math.pow(2,1000));
let values = value.toString().split('').filter(s => s!= '0');
const result = values.reduce((acc,current) => {
    return acc + Number(current)
},0)
console.log(result)