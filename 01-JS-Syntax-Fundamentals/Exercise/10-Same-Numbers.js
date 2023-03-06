function sameNumbers(number){
    let numberAsString = number.toString()
    let sum = 0;
    let condition = true;
    let lastNumber ;

    for (let i = 0; i < numberAsString.length; i++) {
        sum += parseInt(numberAsString[i]);
        lastNumber = numberAsString[i];
        if (lastNumber !== numberAsString[i]){
            condition = false
            break;
        }

        
    }
    console.log(condition)
    console.log(sum)
}


sameNumbers(1234)