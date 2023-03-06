function getDNA(n){
    let arr = 'ATCGTTAGGG'.split('')
    for(let i = 1; i <= n; i++){
        let [a, b] = arr.splice(0,2)
        if(i === 1 || i % 4 === 1){
            console.log(`**${a}${b}**`);
        }
        else if(i === 2 || i % 4 === 2){
            console.log(`*${a}--${b}*`);
        }
        else if(i === 3 || i % 4 === 3){
            console.log(`${a}----${b}`);
        }
        else if(i === 4 || i % 4 === 0){
            console.log(`*${a}--${b}*`);
        }
 
        arr.push(a)
        arr.push(b)
    }
}

//----------------Judge only 50 %-------------------

// function getDNA(step){
//     let dnaTable = {
//         1:  '**AT**',
//         2:  '*C--G*',
//         3:  'T----T',
//         4:  '*A--G*',
//         5:  '**GG**',
//         6:  '*A--T*',
//         7:  'C----G',
//         8:  '*T--T*',
//         9:  '**AG**',
//         10: '*G--G*',
//     }

//     for (let i = 1; i < step + 1; i++){
//         console.log(dnaTable[i])
//     }
// }

getDNA(4)