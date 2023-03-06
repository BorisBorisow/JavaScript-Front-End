function carWash(commands) {
  let percentOfClear = 0;

  for (const cmd of commands) {
    if (cmd === "soap") {
      percentOfClear += 10;
    } else if (cmd === "water") {
      percentOfClear *= 1.2;
    } else if (cmd === "vacuum cleaner") {
      percentOfClear *= 1.25;
    } else if (cmd === "mud") {
      percentOfClear *= 0.9;
    }
  }
  console.log(`The car is ${percentOfClear.toFixed(2)}% clean.`);
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
