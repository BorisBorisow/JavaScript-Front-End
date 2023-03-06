// function solve(word, text){

//     let words = text.split(' ');

//     for (const w of words) {
//         if (w.toLowerCase() === word.toLowerCase()){
//             console.log(word);
//             break;
//         } else {
//             console.log(word + ' not found!')
//             break;
//         }
//     }
// }

// -------------------------------2 way---------------------------
// function solve(wordCheck, string){
//     string = string.split(' ')
//     let output = `${wordCheck} not found!`
//     for (let word of string){
//         word = word.toLowerCase()
//         if (word === wordCheck.toLowerCase()){
//             output = word
//             break
//         }
//     }
//     console.log(output)
// }


// -------------------- 3 way ------------------------------

// function solve(word, text){
//     let wordLowerCase = word.toLowerCase();
//     let textLowerCase = text.toLowerCase();

//     if (textLowerCase.includes(wordLowerCase)){
//         return word;
//     } 

//     return `${word} not found!`;
// }

//-------------------------------4th way---------------------

function solve(word, text){
    let wordLowerCase = word.toLowerCase();
    let textArr = text.split(' ');

    for (const text of textArr) {
        if (text.toLowerCase() === wordLowerCase)
        return word;
    }
    return `${word} not found!`
}

console.log(solve('javascript',
'JavaScript is the best programming language'
))
console.log(solve('python',
'JavaScript is the best programming language'
))


solve('python',
'JavaScript is the best programming language'
)