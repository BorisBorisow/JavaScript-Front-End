function focused() {
    const allInputs = Array.from(document.getElementsByTagName("input"));
    /*превръщаме метода от Дом апито към масив, за да имаме достъп до функциите от масива*/

    for (const input of allInputs){
        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);
    }

    function handleFocus(e){
        const currentInput = e.target;
        const parentDiv = currentInput.parentElement;
        parentDiv.classList.add("focused")

    }

    function handleBlur(e){
        const currentInput = e.target;
        const parentDiv = currentInput.parentElement;

        if (parentDiv.classList.contains("focused")){
            parentDiv.classList.remove("focused")
        }
    }
    
}