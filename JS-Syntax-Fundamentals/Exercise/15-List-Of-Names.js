function listOfNames(names){
    return [...names]
        .sort((aName, bName) => aName.localeCompare(bName))
        .map((name, index) => `${index + 1}.${name}`)
        .join(`\n`)
}


console.log(
listOfNames(
    ["John", "Bob", "Christina", "Ema"]
 )
)