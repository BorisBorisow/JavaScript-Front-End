function solve(input){
    let toFind = input.shift()
    let [firstWord, secondWord] = toFind.split(" ")

    let result = {};

    input.forEach(element => {
        if (element === firstWord || element === secondWord){
         
            if (result.hasOwnProperty(element)){
                result[element] += 1;
            } else {
                result[element] = 1;
            }
        }
    });
    for (const [key, value] of Object.entries(result).sort((a,b) => b[1] - a[1])){
        console.log(`${key} - ${value}`);
    }
    
}


// function solve(arr) {
//     const [wordsToFind, ...words] = arr;
//     const dict = {};
  
//     for (const word of wordsToFind.split(" ")) {
//       dict[word] = 0;
//     }
  
//     for (const sentence of words) {
//       for (const word of sentence.split(" ")) {
//         if (word in dict) {
//           dict[word] += 1;
//         }
//       }
//     }
//     for (const [word, count] of Object.entries(dict).sort((a, b) => b[1] - a[1])) {
//       console.log(`${word} - ${count}`);
//     }
//   }
  

solve(
    [
        'this sentence', 
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
        ]
        
)

solve(
    [
        'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
        
)