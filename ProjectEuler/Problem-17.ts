/**Opin */

function numberToEnglish(n) {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ['', '', "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (0 <= n && n < 20) {
        return ones[n];
    } else if (20 <= n && n <= 90 && n % 10 === 0) {
        return tens[Math.floor(n / 10)];
    } else if (20 < n && n < 100) {
        return tens[Math.floor(n / 10)] + "-" + ones[n % 10];
    } else if (100 <= n && n <= 900 && n % 100 === 0) {
        return ones[Math.floor(n / 100)] + " hundred";
    } else if (100 < n && n < 1000) {
        return ones[Math.floor(n / 100)] + " hundred and " + numberToEnglish(n % 100);
    } else if (n === 1000) {
        return "one thousand";
    } else {
        throw new Error("unexpected input");
    }
}

let result = 0;
for(let i = 1; i<=1000;i++){
    result += numberToEnglish(i).replaceAll(" ","").replaceAll("-","").length
}
console.log(result)