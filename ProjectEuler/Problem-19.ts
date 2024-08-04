let firstDay = new Date(1901,0,1)
console.log(firstDay.toString())
let result = 0;
while (firstDay.getFullYear() < 2001) {
    firstDay.setMonth( firstDay.getMonth() +1);
    let x = firstDay.toLocaleString( 'es-ES',{
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        weekday:"long"
    })
    if(x.includes("domingo")){
        console.log(x)
        result+=1;
    }
}
console.log(result)