// function solve(stock, ordered){
//     let allProducts = [...stock, ...ordered];
//     let result = {};

//     for (let i = 0; i < allProducts.length; i++) {
//         let current = allProducts[i];
//         if (i % 2 === 0){
//             if (!result.hasOwnProperty(current)){
//                 result[current] = 0;
//             }
//         }else {
//             let value = Number(current);
//             let product = allProducts[i - 1];
//             result[product] += value;
//         }
//     }
//     for (const key in result) {
//         console.log(`${key} -> ${result[key]}`)
// }

// }

function solve(stock, ordered) {
  let allProducts = [...stock, ...ordered];
  let result = {};

  for (let i = 0; i < allProducts.length; i += 2) {
    let product = allProducts[i];
    let quantity = Number(allProducts[i + 1]);

    if (!result.hasOwnProperty(product)) {
      result[product] = quantity;
    } else {
      result[product] += quantity;
    }
  }
  for (const key in result) {
    console.log(`${key} -> ${result[key]}`);
  }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
