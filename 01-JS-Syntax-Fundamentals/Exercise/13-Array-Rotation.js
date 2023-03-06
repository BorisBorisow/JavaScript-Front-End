function solve (arrNumbers, step){
    step %=arrNumbers.length

    for (let i = 0; i < step; i++) {
        arrNumbers.push(arrNumbers.shift())
       
    }
    console.log(arrNumbers.join(` `))
}


solve(
    [51, 47, 32, 61, 21], 2
)
solve(
    [32, 21, 61, 1], 4
)