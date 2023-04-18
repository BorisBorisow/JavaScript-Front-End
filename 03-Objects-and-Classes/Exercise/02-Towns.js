// function solve(input) {
//     let result = {};
    
//     for (const line of input) {
//         let [city, latitude, longitude] = line.split(' | ');
//         result.town = city;
//         result.latitude = Number(latitude).toFixed(2);
//         result.longitude = Number(longitude).toFixed(2);
       
//         console.log(result)
//     }
   

// }


// decision 2

// function solve(input) {
//     input 
//      .map(line => line.split(' | '))
//      .map(([town, latitude, longitude]) => ({town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)}))
//      .forEach(obj => console.log(obj))
//     }

// decision 3

function townParse(input) {
    for (const line of input) {
        let [town, latitude, longitude] = line.split(' | ');
        let townObj = {town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude)}
        console.log(townObj)
        }
    }
    

 
 
townParse(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
]
)