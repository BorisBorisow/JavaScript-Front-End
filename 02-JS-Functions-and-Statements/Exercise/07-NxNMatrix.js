// (n) => new Array(n).fill(new Array(n).fill(n)).forEach(row => console.log(row.join(' ')));

function matrix(range) {

    for (let i = 0; i < range; i++) {
        let result = ""
        for (let j = 0; j < range; j++){
            result += range + " ";
        }
        console.log(result)
    } 
   
}

matrix(3)