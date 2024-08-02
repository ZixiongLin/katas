/**
<p>The sum of the squares of the first ten natural numbers is,</p>
$$1^2 + 2^2 + ... + 10^2 = 385.$$
<p>The square of the sum of the first ten natural numbers is,</p>
$$(1 + 2 + ... + 10)^2 = 55^2 = 3025.$$
<p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is $3025 - 385 = 2640$.</p>
<p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p>
 */

let numbers = Array.from({length:100}, (_,index)=> index+1)

let sumSquares = 0;
let squareSum = 0;

numbers.forEach(n => {
    
    sumSquares += Math.pow(n,2);
    squareSum +=n;
})

squareSum = Math.pow(squareSum,2)

console.log(sumSquares);
console.log(squareSum);
console.log(squareSum - sumSquares)