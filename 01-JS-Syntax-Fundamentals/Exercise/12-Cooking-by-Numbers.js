function solve(number, ...commands){
    number = Number(number)
    
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === `chop`){
            number /= 2;
        } else if (commands[i] === `dice`){
            number = Math.sqrt(number)
        } else if (commands[i] === `spice`){
            number++;
        } else if (commands[i] === `bake`){
            number *= 3;
        } else if (commands[i] === `fillet`){
            number -= number * 0.20;
        }
        console.log(number)
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve ('9', 'dice', 'spice', 'chop', 'bake', 'fillet')