function radioCrystals(valueArr) {
  let desiredCrystalValue = parseInt(valueArr[0]);

  for (let i = 1; i < valueArr.length; i++) {
    let currentCrystalValue = parseInt(valueArr[i]);

    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;

    console.log(`Processing chunk ${currentCrystalValue} microns`);

    while (currentCrystalValue !== desiredCrystalValue) {
      while (currentCrystalValue / 4 >= desiredCrystalValue) {
        currentCrystalValue /= 4;
        cutCount += 1;
      }
      if (cutCount > 0) {
        console.log(`Cut x${cutCount}`);
        console.log(`Transporting and washing`);
        currentCrystalValue = Math.floor(currentCrystalValue);
      }

      while (currentCrystalValue * 0.8 >= desiredCrystalValue) {
        currentCrystalValue *= 0.8;
        lapCount += 1;
      }
      if (lapCount > 0) {
        console.log(`Lap x${lapCount}`);
        console.log(`Transporting and washing`);
        currentCrystalValue = Math.floor(currentCrystalValue);
      }

      while (currentCrystalValue - 20 >= desiredCrystalValue) {
        currentCrystalValue -= 20;
        grindCount += 1;
      }
      if (grindCount > 0) {
        console.log(`Grind x${grindCount}`);
        console.log(`Transporting and washing`);
        currentCrystalValue = Math.floor(currentCrystalValue);
      }

      while (currentCrystalValue - 2 >= desiredCrystalValue - 1) {
        currentCrystalValue -= 2;
        etchCount += 1;
      }
      if (etchCount > 0) {
        console.log(`Etch x${etchCount}`);
        console.log(`Transporting and washing`);
        currentCrystalValue = Math.floor(currentCrystalValue);
      }

      if (currentCrystalValue < desiredCrystalValue) {
        currentCrystalValue += 1;
        console.log(`X-ray x1`);
      }
    }
    console.log(`Finished crystal ${desiredCrystalValue} microns`);
  }
}

radioCrystals([1000, 4000, 8100]);
