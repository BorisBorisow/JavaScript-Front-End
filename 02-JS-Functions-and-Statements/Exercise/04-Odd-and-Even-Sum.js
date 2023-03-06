function solve(number){
    let numbers = String(number)
    let evens = 0;
    let odds = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0){
            evens += Number(numbers[i]);
        } else {
            odds += parseInt(numbers[i]);
        }
        
    }
    
    return `Odd sum = ${odds}, Even sum = ${evens}`
}

console.log(solve(1123123))
console.log(solve(3495892137259234))