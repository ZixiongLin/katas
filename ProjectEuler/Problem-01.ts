/**
If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.</p>
<p>Find the sum of all the multiples of 3 or 5 below 1000.</p>
.
result: 233168
 */
console.time('test');
let numbers = Array.from({length: 999}, (_, index) => index + 1);

const sum = numbers.filter(n => n%3===0 || n%5===0).reduce((acc,n) => {
    return acc + n
}, 0)
console.log(sum)
// berchmark 1º time: 0.397ms

// let acc = 0
// for (let index = 1; index < 1001; index++) {
//   if(index%3 ==0 || index%5==0){
//     acc+=index
//   }
// }
// console.log(acc)
// berchmark 1º time: 9.909ms



console.timeEnd('test');