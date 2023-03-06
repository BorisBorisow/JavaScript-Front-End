function calculator(a, b, operator) {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const operations = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
  };

  console.log(operations[operator](a,b));
}

// function calculator(a, b, operator){
//     const add =  a + b
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;

//     const operations = {
//         "add": add,
//         "subtract": subtract,
//         "multiply": multiply,
//         "divide": divide,
//     }

//     console.log(operations[operator])
// }

calculator(5, 5, "multiply");

calculator(40, 8, "divide");
