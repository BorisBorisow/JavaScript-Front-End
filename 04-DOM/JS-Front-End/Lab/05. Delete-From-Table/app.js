function deleteByEmail() {
    const result = document.getElementById("result");
    const input = document.querySelector("input[name='email']");
    const evenTds = Array.from(document.querySelectorAll("td:nth-child(even)"));
    let inputValue = input.value;
    let foundElement = evenTds.find((td) => td.textContent === inputValue);

    if (foundElement) {
        foundElement.parentNode.remove()
        result.textContent = "Deleted."
        // input.value = "";
    } else {
        result.textContent = "Not found.";
        // input.value = "";
    }
}