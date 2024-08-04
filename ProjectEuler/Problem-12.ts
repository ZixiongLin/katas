let triangleNumber = 0;
let i = 1;
let divisors= [];
while(divisors.length < 501){
    divisors = []
    triangleNumber+=i;
    i++;
    for(let divisor = 1; divisor< Math.sqrt(triangleNumber);divisor++){
        if( triangleNumber % divisor != 0){ continue};
        if(triangleNumber/divisor == divisor ){
            divisors.push(divisor)
        }else{
            divisors.push(divisor)
            divisors.push(triangleNumber/divisor)
        }
    }
    console.log(triangleNumber)
    console.log(divisors.length)
}
// console.log(divisors.length)
// console.log(triangleNumber)