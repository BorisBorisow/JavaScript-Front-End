function addItem() {
    const items = document.getElementById("items");
    const input = document.getElementById("newItemText");
    const newLi = document.createElement("li");
    newLi.textContent = input.value;

    if(newLi.textContent != ""){
        items.appendChild(newLi);
        
    }
    input.value = "";
}

