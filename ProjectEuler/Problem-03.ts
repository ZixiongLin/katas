/**
<p>The prime factors of $13195$ are $5, 7, 13$ and $29$.</p>
<p>What is the largest prime factor of the number $600851475143$?</p>
 */

let value = 600851475143
let p = 2;
while( value > p*p){
    if(value % p == 0){
        console.log(p);
        value= value /p
    }else{
        p++;
    }
}

console.log(value)

