// function solve(input){
//     let unsorted = {}
//     for (const el of input){
//         let [term, def] = el.split('":"')
//         term = term.slice(2);
//         def = def.slice(0, -2);

//         unsorted[term] = def;
//     }
//     const ordered = Object.keys(unsorted).sort().reduce(
//         (obj, key) => {
//           obj[key] = unsorted[key];
//           return obj;
//         },
//         {}
//       );

//     for (const [key, value] of Object.entries(ordered)){
//         console.log(`Term: ${key} => Definition: ${value}`)
//     }
// }

function solve(data) {
  let unsortedInfo = {};

  for (let item of data) {
    item = JSON.parse(item);

    unsortedInfo[Object.keys(item)[0]] = Object.values(item)[0];
  }
  for (let [term, def] of Object.entries(unsortedInfo).sort(([keyA], [keyB]) =>
    keyA.localeCompare(keyB)
  )) {
    console.log(`Term: ${term} => Definition: ${def}`);
  }
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
