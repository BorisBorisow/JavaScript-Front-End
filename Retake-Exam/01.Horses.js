function solve(array){
  let horses = array.shift().split("|");
  // console.log(horses)
  for (const line of array){
    if(line.includes("Finish")){
      break;
    }

    let [cmd, firstHorse, secondHorse] = line.split(" ");
      
    if (cmd === "Retake"){
      let indexFirst = horses.indexOf(firstHorse);
      let indexSecond = horses.indexOf(secondHorse);
      if (indexFirst < indexSecond){
        horses[indexFirst] = secondHorse;
        horses[indexSecond] = firstHorse;
        console.log(`${firstHorse} retakes ${secondHorse}.`);
      }
    }

    if (cmd === "Trouble"){
      let currentIndex = horses.indexOf(firstHorse);
      if (currentIndex > 0 && currentIndex < horses.length){
        horses.splice(currentIndex, 1);
        horses.splice(currentIndex - 1, 0, firstHorse);
        console.log(`Trouble for ${firstHorse} - drops one position`);
      }
    }

    if (cmd === "Rage"){
      let currentIndex = horses.indexOf(firstHorse);
      // console.log(currentIndex)
      if ((currentIndex + 1) == horses.length){
        console.log(`${firstHorse} rages 2 positions ahead.`);
      } else if (horses.length - (currentIndex + 1) == 1){
        [horses[currentIndex], horses[currentIndex + 1]] = [horses[currentIndex + 1], horses[currentIndex]];
        console.log(`${firstHorse} rages 2 positions ahead.`);
      } else {
        // console.log(currentIndex)
        horses.splice(currentIndex, 1);
        horses.splice(currentIndex + 2, 1, firstHorse);
        console.log(`${firstHorse} rages 2 positions ahead.`);
      }
    }

    if (cmd === "Miracle"){
      let last = horses.pop();
      let first = horses.shift();
      horses.unshift(last);
      horses.push(first);
      console.log(`What a miracle - ${first} becomes first.`);
    }

    // Log horses at the end of each iteration

  }

  console.log(horses.join('->'));
  console.log(`The winner is: ${horses[horses.length - 1]}`);
}

solve((['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])
)

solve((['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish'])

)

solve((['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])
)