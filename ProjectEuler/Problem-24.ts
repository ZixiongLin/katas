let integers = ['1','2','3','4','5','6','7','8',9];
let permutations = ['0'];
const LIMIT = 1000*1000
let combinations = (list:string[], value:string) => {
    return list.flatMap( i => {
        let result = []
        for(let index = 0; index<=i.length;index++){
            result.push( i.substring(0,index) + value + i.substring(index, i.length) )
        }
        return result
    })
}

integers.forEach( i => {
    if(permutations.length > LIMIT){
        return
    }
    permutations = combinations(permutations,i)
})

console.log(permutations.sort()[LIMIT-1])