let LIMIT = 1000 *1000;
let result = {
    chain: 0,
    value: 0
}
for (let i = LIMIT; i > 0; i--) {
    let chain = 1;
    let currentChain = i;
    while(currentChain >1){
        if(currentChain%2 == 0){
            currentChain = Math.floor(currentChain/2);
        }else{
            currentChain = 3* currentChain +1;
        }
        chain++;
    }
    if(chain > result.chain){
        result = {
            chain:chain,
            value: i
        }
    }
}

console.log(result.value)