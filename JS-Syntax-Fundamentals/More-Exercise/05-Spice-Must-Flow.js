function solve(resources){
    let days = 0;
    let yield = 0;

    while (resources >= 100){
        days += 1;
        yield += (resources - 26);
        resources -= 10;
    }
    if (yield >= 26){
        yield -= 26;
    } else {
        yield = 0
    }
    console.log(`${days}\n${yield}`)
}