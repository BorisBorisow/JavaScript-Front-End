window.addEventListener('load', solve);

function solve() {

    const inputDOMSelectors = {
        typeOfProductInput: document.getElementById("type-product"),
        descriptionInput: document.getElementById("description"),
        nameInput: document.getElementById("client-name"),
        phoneInput: document.getElementById("client-phone"),
    }
    
    const receivedSection = document.getElementById("received-orders");
    const completedSection = document.getElementById("completed-orders");
    const submitBtn = document.querySelector("#right > form > button")
        .addEventListener("click", onSubmit);
    const clearBtn = document.querySelector(".clear-btn")
        .addEventListener("click", onClear);

    
    function onSubmit(e){
        if (e){
            e.preventDefault();
        }

        const allInputsAreFilled = Object.values(inputDOMSelectors)
            .every((input) => input.value !== "");

        if (!allInputsAreFilled){
            return;
        }
       
        
        const div = createElement("div", receivedSection, "", "container");
        createElement("h2", div, `Product type for repair: ${inputDOMSelectors.typeOfProductInput.value}`);
        createElement("h3", div, `Client information: ${inputDOMSelectors.nameInput.value}, ${inputDOMSelectors.phoneInput.value}`);
        createElement("h4", div, `Description of the problem: ${inputDOMSelectors.descriptionInput.value}`);
        const startBtn = createElement("button", div, "Start repair", "start-btn")
            .addEventListener("click", onStart)
        const finishBtn = createElement("button", div, "Finish repair", "finish-btn", "", {disabled: "true"})
            .addEventListener("click", onFinish)

        document.querySelector("form").reset();


    }

    function onStart(e){
        if (e){
            e.preventDefault();
        }
        let currentBtn = e.target;
        let finishBtn = e.target.nextElementSibling;
        currentBtn.disabled = true;
        finishBtn.disabled = false
        
    }

    function onFinish(e){
        if (e){
            e.preventDefault();
        }
        let currentEl = e.target;
        console.log("Hallo")
        let parentLi = currentEl.parentNode;
        let liChildren = parentLi.children
        let startBtn = liChildren[3]
        let finBtn = liChildren[4]
        startBtn.remove()
        finBtn.remove()
        
        completedSection.appendChild(parentLi)
    }

    function onClear(e){
        if (e){
            e.preventDefault();
        }
        let currentEl = e.target;
        let parentEl = currentEl.parentNode;
        let liToRemove = Array.from(parentEl.children).splice(3,);
        liToRemove.map(x => x.remove())
    }

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);
    
        if (useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== "input") {
            htmlElement.textContent = content;
            }
    
            if (content && type === "input") {
            htmlElement.value = content;
            }
        }
    
        if (classes) {
            htmlElement.className = classes;
        }
    
        if (id) {
            htmlElement.id = id;
        }
    
        // { src: 'link', href: 'http' }
        if (attributes) {
            for (const key in attributes) {
            htmlElement.setAttribute(key, attributes[key]);
            }
        }
    
        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
    
        return htmlElement;
        }   
}