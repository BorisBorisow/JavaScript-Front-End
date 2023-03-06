// function solve(text){
//     let words = text.split(" ");

//     let result = [];
//     for (const word of words) {
//         if (word.startsWith("#") && word.length > 1 && checkIfIsValid(word)){
//             result.push(word.slice(1));
//         }
        
//     }
//     console.log(result.join('\n'))

//     function checkIfIsValid(myWord){
//         let myWordLowerCase = myWord.toLowerCase()
//             .slice(1);
//         let isValid = true;

//         for (const symbol of myWordLowerCase) {
//             let asciiCode = symbol.charCodeAt(0);
//             if (!(asciiCode >= 97 && asciiCode <= 122)){
//                 isValid = false;
//                 break;
//             }
//         }
//         return isValid;
//     }
// }


function solve(string){
    string = string.split(' ')
    function onlyLettersAndNumbers(str) {
  return Boolean(str.match(/#[A-Za-z]/));
    }
    for (const word of string){
        if (onlyLettersAndNumbers(word)){
            console.log(word.slice(1, word.length))
        }
    }
}



console.log(
solve('Nowadays everyone uses # to tag a #special word in #socialMedia'))