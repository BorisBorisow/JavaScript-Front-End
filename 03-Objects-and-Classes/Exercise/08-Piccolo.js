function solve(array) {
  let parkingSet = new Set();

  for (const el of array) {
    [command, number] = el.split(", ");
    if (command === "IN") {
      parkingSet.add(number);
    } else if (command === "OUT") {
      parkingSet.delete(number);
    }
  }
  let parkingArr = Array.from(parkingSet).sort();
  if (parkingArr.length > 0) {
    console.log(parkingArr.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
