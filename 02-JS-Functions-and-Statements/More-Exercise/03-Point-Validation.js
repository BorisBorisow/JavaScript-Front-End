function validityChecker(numbers) {
  let [x1, y1, x2, y2] = numbers;
  function validator(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  const firstCheck = validator(x1, y1, 0, 0);
  const secondCheck = validator(x2, y2, 0, 0);
  const thirdCheck = validator(x1, y1, x2, y2);

  if (Number.isInteger(firstCheck)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (Number.isInteger(secondCheck)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (Number.isInteger(thirdCheck)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

validityChecker([3, 0, 0, 4]);
