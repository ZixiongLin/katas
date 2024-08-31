let sequence = new Set();

for(let a = 2; a<=100;a++){
    for(let b = 2; b<=100;b++){
        sequence.add(Math.pow(a,b))
    }
}
console.log(sequence.size) // 9183