function solve(all, numbers){
    let arr=[];
    for (let i = 0; i < all; i++) {
        arr.push(numbers[i]);
    }
    console.log(...arr.reverse());
}

solve(3, [10, 20, 30, 40, 50])