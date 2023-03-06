// function factorialDivision(first, second){
//     let firstFact = multiplication(first);
//     let secondFact = multiplication(second);

//     let resultOfDivide = firstFact / secondFact

//     function multiplication(number){
//         let result = 1;
//         for (let i = 1; i < number+1; i++) {
//             result *= Number(i)
//         }
//         return result
//     }
//     console.log(resultOfDivide.toFixed(2))
// }


function factorialDivision(first, second){
    let firstFact = factorial(first);
    let secondFact = factorial(second);

    let resultDivision = firstFact / secondFact

    function factorial(number){
        if (number == 1){
            return 1;
        }

        return number * factorial(number - 1);

    }
    console.log(resultDivision.toFixed(2))
}

factorialDivision(
    5,
    2
)
factorialDivision(
    6,
    2
)