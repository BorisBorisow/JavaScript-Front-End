function solve(firstNum, operator, secondNum){
    let result = {
        '+': firstNum + secondNum,
        '-': firstNum - secondNum,
        '*': firstNum * secondNum,
        '/': firstNum / secondNum,
    }
    console.log(result[operator].toFixed(2))
}

solve(5,
'+',
100
)