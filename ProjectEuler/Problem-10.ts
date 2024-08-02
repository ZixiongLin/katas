/**
<p>The sum of the primes below $10$ is $2 + 3 + 5 + 7 = 17$.</p>
<p>Find the sum of all the primes below two million.</p>
 */

const FindPrimesEratosthenes = (n) => {
    let result = Array.from({length:n+1}, (_,index) => true)
    for (let i = 2; i < Math.sqrt(n); i++) {
        if(result[i]){
            let j = Math.pow(i,2);
            while(j<=n){
                result[j] = false;
                j = j+i;
            }
        }
        
    }
    return result.map((b,index) =>{
        if(!b){return undefined}
        return index
    }).filter((n) => n!=undefined);
}
console.log(FindPrimesEratosthenes(2*1000*1000).length)
console.log(FindPrimesEratosthenes(2*1000*1000).reduce((acc,current) => {
    return acc+current
},0))