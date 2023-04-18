function solve(Arr){
    let data = {};

    for (const line of Arr){
        let [product, price] = line.split(" : ");
        let letter = product[0];
        if (!(letter in data)){
            data[letter] = []
        }
        data[letter].push({product, price});
    } 

    for (const key of Object.keys(data).sort()){
        console.log(key);

        for (let product of data[key].sort((a, b) => a.product.localeCompare(b.product))){
            console.log(`  ${product.product}: ${product.price}`)
        }
    }

}



solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
    )