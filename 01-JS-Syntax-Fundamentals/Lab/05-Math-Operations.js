function solve (firstNumber, secondNumber, operation) {
    output = 0
    if (operation === "/") {
        output = firstNumber / secondNumber;
        console.log(output);
    } else if (operation === "*"){
        output = firstNumber * secondNumber;
        console.log(output);
    } else if (operation === "+"){
        output = firstNumber + secondNumber;
        console.log(output);
    } else if (operation === "-"){
        output = firstNumber - secondNumber;
        console.log(output);
    } else if (operation === "%"){
        output = firstNumber % secondNumber;
        console.log(output);
    } else if (operation === "**"){
        output = firstNumber ** secondNumber;
        console.log(output);
    } 
}

solve(3, 5.5, '*')

