const isAbundant = (n) => {
    let result = 0;
    for (let divisor = 2; divisor <= n/2; divisor++) {
        if(n % divisor != 0) continue;
        result+=divisor
        if(result > n) { return true}
    }
    return result > n;
}

let abundants = []
for(let i = 12; i<28123;i++){
    if(!isAbundant(i)){ continue}
    abundants.push(i)
}

let complexAbundantNumbers = new Set()

for(let i = 0; i< abundants.length;i++){
    for(let j = 0; j<abundants.length;j++){
        complexAbundantNumbers.add(abundants[i] + abundants[j])
    }
}

let arrayComplexAbundantNumbers = [...complexAbundantNumbers]

let allNumbersIntegers = Array.from({length:28123}, (_,index) => index+1).filter( n => !arrayComplexAbundantNumbers.includes(n));

let result = 0

allNumbersIntegers.forEach(n => {
    result+=n;
});

console.log(result)