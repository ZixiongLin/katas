let LIMIT = 20

const numbers = Array.from({length:LIMIT}, (_, index) => index+1);
let value = 2520

for (const n of numbers) {
    if(value % n == 0){ continue}
    value = value *n;
}
console.log(value)
let index = 1;
while(numbers.every(n => value%n ===0)){
    value = value / numbers[index]
    for(let numberIndex = 0; numberIndex< numbers.length; numberIndex++){
        
        console.log(`${value} / ${numbers[numberIndex]} = ${value/numbers[numberIndex]}`)
    }
    console.log(value)
}
console.log(value)