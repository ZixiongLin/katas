/**
 * <p>A palindromic number reads the same both ways. The largest palindrome made from the product of two $2$-digit numbers is $9009 = 91 \times 99$.</p>
<p>Find the largest palindrome made from the product of two $3$-digit numbers.</p>
 * 
 */

const isNotPalindrome = (n) => {
    let s = String(n);
    return s !== s.split('').reverse().join('');
}
const LIMIT = 1000
let result = 0
for(let i = 100; i< LIMIT; i++){
    for (let j = 100; j < LIMIT; j++) {
        if(isNotPalindrome(i*j)) continue;
        if(result > i*j){
            continue;
        }
        result = i*j
    }
}

console.log(result)