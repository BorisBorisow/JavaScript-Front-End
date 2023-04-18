function shoppingList(input) {
  let groceries = input.shift().split("!");
  let line = input.shift();

  while (line != "Go Shopping!") {
    let [command, item, newItem] = line.split(" ");

    if (command == "Urgent") {
      if (!groceries.includes(item)) {
        groceries.unshift(item);
      }
    }

    if (command == "Unnecessary") {
      if (groceries.includes(item)) {
        let index = groceries.indexOf(item);
        groceries.splice(index, 1);
      }
    }

    if (command == "Correct") {
      if (groceries.includes(item)) {
        let index = groceries.indexOf(item);
        groceries[index] = newItem;
      }
    }

    if (command == "Rearrange") {
      if (groceries.includes(item)) {
        let index = groceries.indexOf(item);
        groceries.splice(index, 1);
        groceries.push(item);
      }
    }

    line = input.shift();
  }

  console.log(groceries.join(", "));
}

shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);

shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
