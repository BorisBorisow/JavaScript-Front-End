function solve(str) {
  let arr = str.split(" ").map((x) => x.toLowerCase(str));

  let result = {};
  arr.forEach(x => {
    if (x in result){result[x] += 1} else {result[x] = 1}
  });
//   for (const x of arr) {
//     if (x in result) {
//       result[x] += 1;
//     } else {
//       result[x] = 1;
//     }
//   }

  for (let [key, value] of Object.entries(result)) {
    if (value % 2 == 0) {
      delete result[key];
    }
  }
  console.log(Object.keys(result).join(" "));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve('Cake IS SWEET is Soft CAKE sweet Food');
