// function solve(first, second, third){
//     return (first + second) - third
// }

function solve(first, second, third){
    const sum = (a, b) => a + b;
    const subtract = (mySum, c) => mySum - c;

    return subtract(sum(first, second), third)
}

console.log(
    solve(
        23,
6,
10

    )
)