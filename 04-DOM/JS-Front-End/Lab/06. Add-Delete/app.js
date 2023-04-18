function addItem() {
    const input = document.getElementById("newItemText");
    const ulContainer = document.getElementById("items");
    const newLi = document.createElement("li");
    const newAnchor = document.createElement("a");
    newLi.textContent = input.value;
    newAnchor.textContent = "[Delete]";
    newAnchor.addEventListener("click", deleteHandler);
    newLi.appendChild(newAnchor)
    ulContainer.appendChild(newLi);
    input.value = "";

    function deleteHandler(e){
        const anchor = e.currentTarget;
        anchor.parentElement.remove();
       
    }
    
}


