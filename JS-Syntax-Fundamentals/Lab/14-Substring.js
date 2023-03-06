// function substring(word, start, stop){
//     reversedWord = "";
//     for (let i = start; i <= stop; i++) {
//         reversedWord += word[i];
        
//     }
//     console.log(reversedWord)
// }

function substring(string, start, count){
    let result = string.substring(start, start + count);

    console.log(result)
}


substring('ASentence', 1, 8)
substring('SkipWord', 4, 7)