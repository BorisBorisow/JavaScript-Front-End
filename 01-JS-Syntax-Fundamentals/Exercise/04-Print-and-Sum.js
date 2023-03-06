function printAndSum(start, stop){
    let sum = 0;
    let numbersString = "";

    for (let i = start; i <= stop; i++) {
        sum += i;
        numbersString += i + " "
    }
    console.log(numbersString)
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)
printAndSum(0, 26)