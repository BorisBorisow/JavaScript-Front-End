function addItem() {
    const input = document.getElementById("newItemText");
    const itemsContainer = document.getElementById("items");
    const newLi = document.createElement("li");
    newLi.textContent = input.value;
    itemsContainer.appendChild(newLi);
    input.value = "";
}


