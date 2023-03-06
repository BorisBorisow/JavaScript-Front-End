function sortingNumbers(numbers){
    let ascendingSorted = [...numbers].sort((a, b) => a - b);
    let result = [];

    while (ascendingSorted.length > 0){
        let first = ascendingSorted.shift();
        let last = ascendingSorted.pop();
        result.push(first, last);
    }
        return result
    
}


console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
