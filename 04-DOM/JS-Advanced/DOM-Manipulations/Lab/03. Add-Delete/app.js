function addItem() {
    const items = document.getElementById("items");
    const input = document.getElementById("newItemText");
    const newLi = document.createElement("li");
    newLi.textContent = input.value;
    

    //create a delete button
    const button = document.createElement("a"); 
    button.textContent = "[Delete]";
    button.href = "#";
    button.addEventListener("click", removedElement);
    newLi.appendChild(button);

    if (input.value.length > 0){
        items.appendChild(newLi);
    }
 
    input.value = "";

    function removedElement(ev){
        const parent = ev.target.parentNode;
        parent.remove()
    }
}

