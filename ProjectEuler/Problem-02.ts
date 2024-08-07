/**
 <p>Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with $1$ and $2$, the first $10$ terms will be:
$$1, 2, 3, 5, 8, 13, 21, 34, 55, 89, \dots$$</p>
<p>By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.</p>
 * 
 */

let fibo = [1,2];
let index = fibo.length-1;
const LIMIT = 4*1000*1000
// const LIMIT = 30
while(fibo[index] < LIMIT){
    let lastValue = fibo[index];
    let secondLastValue = fibo[index-1]
    fibo.push(lastValue+secondLastValue)
    index++;
}
fibo.pop()
const fiboEven = fibo.filter(n => n% 2 === 0);
const result = fiboEven.reduce((acc,n) => {
    return acc + n
},0)

console.log(result)