function solve(...numbers){
    let isPositive = numbers
        .filter((num) => num < 0)
        .length % 2 === 0 ? `Positive` : `Negative`;
    
    console.log(isPositive)
}



solve( 5,
    12,
   -15
   )

solve(-6,
    -12,
     14
    )

solve(-1,
    -2,
    -3
    )