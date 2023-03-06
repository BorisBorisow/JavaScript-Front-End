function solve(number){
    let result = '';

    for (let i = 0; i < Number(number)/10; i++){
        result += '%';
    }
    if (result.length < 10) {
        let dif = 10 - result.length
        result += '.'.repeat(dif)
        console.log(`${number}% [${result}]\nStill loading...`)
    } else {
        console.log(`100% Complete!`)
    }
}

// function solve(number) {
//     let bar = '[..........]'

//     if (number == 100) {
//         console.log('100% Complete!')
//     } else {
//         for (let i = 0; i < number; i+=10) {
//             bar = bar.replace('.', '%')
//         }
//         console.log(`${number}% ${bar}`);
//         console.log('Still loading...');  
//     }
// }

solve(30)
solve(50)
solve(100)