// function palindromeIntegers(numbers){
//     numbers 
//         .forEach((num) => {
//             console.log(isPalindrome(num))
//         });
    
//     function isPalindrome(num) {
//         let reversed = Number([...num.toString()].reverse().join(''));

//         return num == reversed
//     }
// }

function palindromeIntegers(numbers){
    const isPalindrome = (num) => Number([...num.toString()].reverse().join('')) === num;
    return numbers
        .map(isPalindrome)
        .join('\n');
}


// function palindromeIntegers(numbers){
//     for (const el of numbers) {
//         let reversed = String(el).split('').reverse().join('');

//          if (el == reversed) {
//             console.log('true')
//         } else {
//             console.log('false')
//         }

//     }
    
// }

console.log(palindromeIntegers([123,323,421,121]))