function addItem() {
    let newText = document.getElementById("newItemText").value;
    let newValue = document.getElementById("newItemValue").value;
    let option = document.createElement("option");
    const dropMenu = document.getElementById("menu");

    if(newText !== "" && newValue !== "") {
        option.text = newText;
        option.value = newValue;
        dropMenu.appendChild(option);
    }

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";

}