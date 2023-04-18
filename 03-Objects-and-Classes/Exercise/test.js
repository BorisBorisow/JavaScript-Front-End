//  01.Employees---------------

// function solve(input){
//     let result = [];

//     for (const person of input) {
//         result.push(`Name: ${person} -- Personal Number: ${person.length}`)
//     }
//     console.log(result.join('\n'));
// }
//     solve([
//   "Silas Butler",
//   "Adnaan Buckley",
//   "Juan Peterson",
//   "Brendan Villarreal",
// ]);

//  02.Towns----------------------------------------------------

// function solve(input){
//     let info = {};
//     for (const line of input) {
//         let [town, lat, lng] = line.split(' | ');
//         info.town = town;
//         info.latitude = Number(lat).toFixed(2);;
//         info.longitude = Number(lng).toFixed(2);;

//         console.log(info);
//     }

// }

// solve(
//     ['Sofia | 42.696552 | 23.32601',
// 'Beijing | 39.913818 | 116.363625']

// )

//  03. Store Provision-----------------------------------------

// function solve(inStore, orderedProducts) {
//   let allProducts = [...inStore, ...orderedProducts];
//   let result = {};

//   for (let index = 0; index < allProducts.length; index += 2) {
//     let product = allProducts[index];
//     let quantity = parseInt(allProducts[index + 1]);

//     if (!result[product]){
//         result[product] = quantity;
//     }else  {
//         result[product] += quantity;
//     }
//   }
//   for (const [key, value] of Object.entries(result)){
//     console.log(`${key} -> ${value}`);
//   }
// }

// solve(
//   ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
//   ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
// );


//  04.Movies------------------------------------------------

