function reverseString(a, b, c){
    let asString = a + b + c
    let asReversedString = asString.split("").reverse().join(" ")

    console.log(asReversedString)
}

reverseString(
    '1',
'L',
'&'

)