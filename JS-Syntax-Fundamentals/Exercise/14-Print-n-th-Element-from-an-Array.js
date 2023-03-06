function solve(list, step){
    let output = []

    for (let i=0; i < list.length; i+= step) {
        output.push(list[i])

    }
    return output
}


solve(['5',
'20',
'31',
'4',
'20'],
2)

solve(['dsa',
'asd',
'test',
'tset'],
2)