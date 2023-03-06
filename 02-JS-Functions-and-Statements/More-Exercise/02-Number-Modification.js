// function numberModification(number){
//     let numbers = number.toString();
    
//     function avgNumbers(numbers){
//         let sum = 0;
//         for (const num of numbers) {
//             sum += Number(num)
//         }
//         return sum/numbers.length
//     }

//     while (avgNumbers(numbers) < 5){
//         numbers += 9
//     }
//     console.log(numbers)
// }

function numberModification(number){
    let numArr = number.toString().split('').map(x => Number(x));
    let avgNum = checkAvg(numArr);

    function checkAvg(nums){
        let result = nums.reduce((a,b) => a + b, 0) / nums.length;
        return result
    }
    
    while (avgNum < 5) {
        numArr.push(9);
        avgNum = checkAvg(numArr);
    }
    console.log(numArr.join(''));
}

numberModification(101)
numberModification(5835)