function sumOfDigits(number){
    let numbersAsString = number.toString();
    let sum = 0;

    for (const digitAsString of numbersAsString) {
        let digit = Number(digitAsString)
        sum += digit
    }
    console.log(sum)
}


sumOfDigits(245678)
sumOfDigits(97561)
sumOfDigits(543)