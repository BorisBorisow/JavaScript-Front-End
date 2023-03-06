function solve(firstStr, secondStr){
    let chars = [];
    let firstChar = firstStr.charCodeAt(0);
    let secondChar = secondStr.charCodeAt(0);

    let startChar = Math.min(firstChar, secondChar);
    let stopChar = Math.max(firstChar, secondChar);

    for (let currentChar = startChar + 1; currentChar < stopChar; currentChar++) {
        chars.push(String.fromCharCode(currentChar))
        
    }

    return chars.join(' ')
 

}
console.log(solve("a", "d"));
console.log(solve("#", ":"));
