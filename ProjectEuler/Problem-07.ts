let primes = [2];
let n = 2;
while(primes.length <10001){
    if(primes.some(p => n%p == 0)){
        n++;
        continue;
    }
    primes.push(n);
    n++;
}
console.log(primes.length);
console.log(primes.reverse())