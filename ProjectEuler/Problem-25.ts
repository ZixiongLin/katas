let a = BigInt(1);
let b = BigInt(1);

let result = '';
let index = 2
while ( result.length <1000){
    let fibo = a+b;
    a = b;
    b = fibo
    result = fibo.toString();
    index+= 1;
}
console.log(result.length)
console.log(index)