function MultiplicationTable(input){
    const times = 10;

    for (let i = 1; i <= times; i++) {
        let currentNum = input * i
        
        console.log(`${input} X ${i} = ${currentNum}`)
       
    }
}

MultiplicationTable(5)