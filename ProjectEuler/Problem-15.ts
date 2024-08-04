/**
 * 
<p>Starting in the top left corner of a $2 \times 2$ grid, and only being able 
to move to the right and down, there are exactly $6$ routes to the bottom right corner.</p>
<p>How many such routes are there through a $20 \times 20$ grid?</p>
*/
let grid = []
const LIMIT = 20
// for(let i =0;i<LIMIT;i++){
//     let row = []
//     for(let j =0;j<LIMIT;j++){
//         row.push(i+j)
//     }
//     grid.push(row)
// }

// let countPaths = 0;

// console.table(grid)

// const MAX = Math.max(...grid[grid.length-1]);
// const findPath = (grid, i,j) => {
//     if(grid[i][j] == MAX){
//         return 1;
//     }
//     if(grid[i+1] == undefined){
//         return findPath(grid,i,j+1)
//     } 
//     if(grid[i][j+1] == undefined){
//         return findPath(grid,i+1,j)
//     }
//     return findPath(grid,i+1,j) + findPath(grid,i,j+1)
// }

// const result = findPath(grid,15,15)
// console.log("====== result =============")
// console.log(result)

const N = LIMIT+LIMIT;
const K = LIMIT;
let NFactorial = 1;
for(let up = 1; up <=N;up++){
    NFactorial*=up;
}

let NMinusKFactorial= 1;
for(let NMinusK = 1; NMinusK <=(N-K);NMinusK++){
    NMinusKFactorial *= NMinusK
}

let KFactorial = 1;
for(let down = 1; down <=K;down++){
    KFactorial*=down
}
console.log(NFactorial/(NMinusKFactorial* KFactorial))