let sequence = [];

for(let i = 2; i< 9999999; i++){
    const splitedNumber = i.toString().split('');
    let checkSum = splitedNumber.reduce((acc,current) => {
        return acc + Math.pow(parseInt(current),5)
    },0)
    if(i == checkSum){
        sequence.push(i);
    }
}
const result = sequence.reduce((acc,current) => {
    return acc + current
},0)
console.log(result)