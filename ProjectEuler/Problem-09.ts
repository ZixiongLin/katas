const triplets = (LIMIT) => {
    let a=0
    let b = 0
    let c = 0;
    let m = 2;
    while(c< LIMIT){
        for(let n = 1; n< m;n++){
            a = m*m - n*n;
            b = 2*m*n;
            c = m * m + n * n
            if(c > LIMIT){
                break
            }
            if(a+b+c == 1000){
                console.log(a*b*c)
            }
        }
        m++;
    }
}

console.log(triplets(900))