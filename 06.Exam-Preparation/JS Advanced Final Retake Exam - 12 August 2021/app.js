window.addEventListener('load', solve);


function solve() {
    const inputDOMSelectors = {
        model: document.getElementById("model"),
        year: document.getElementById("year"),
        description: document.getElementById("description"),
        price: document.getElementById("price"),
    }
    
    const furnitureList = document.getElementById("furniture-list");
    const totalPrice = document.querySelector("#information .total-price")
    
    
    const addBtn = document.getElementById("add");
    addBtn.addEventListener("click", onAdd);
    
    let total = 0;

    function onAdd(e){
        if (e){
            e.preventDefault();
        }


        if (inputDOMSelectors.price.value == "" || inputDOMSelectors.description.value == "" || Number(inputDOMSelectors.year.value) <= 0 || Number(inputDOMSelectors.price.value) <= 0){
            return;
        }
        total += Number(inputDOMSelectors.price.value);
        const tr = createElement("tr", furnitureList, "", "info");
        createElement("td", tr, `${inputDOMSelectors.model.value}`);
        createElement("td", tr, `${(Number(inputDOMSelectors.price.value)).toFixed(2)}`);
        const tdButtons = createElement("td", tr);
        const moreBtn = createElement("button", tdButtons, "More Info", "moreBtn");
        const buyBtn = createElement("button", tdButtons, "Buy it", "buyBtn");
        moreBtn.addEventListener("click", onMore);
        buyBtn.addEventListener("click", onBuy);
        
        const hideTr = createElement("tr", furnitureList, "", "hide");
        createElement("td", hideTr, `Year: ${inputDOMSelectors.year.value}`)
        createElement("td", hideTr, `Description: ${inputDOMSelectors.description.value}`, "", "", {colspan: "3"}) 
        clearAllInputs();
    }

    function onMore(e){
        let current = e.target;
        let tr = current.parentNode.parentNode.nextElementSibling;
        if (current.textContent === "More Info"){
            tr.style.display = "contents"
            current.textContent = "Less Info";
        } else {
            tr.style.display = "none"
            current.textContent = "More Info";
        }
        // document.querySelector("#furniture-list > tr.hide")
    }
    function onBuy(e){
        let current = e.target;
        let parent = current.parentNode.parentNode;

        totalPrice.textContent = total.toFixed(2);
       
        parent.nextElementSibling.remove()
        parent.remove()
        // let parent = e.target.parentNode.parentNode;
        // let currPrice = Number(parent.querySelector('td:nth-child(2)').textContent);
        // total += currPrice;
        // totalPrice.textContent = total.toFixed(2);
        // parent.remove();
    }

    function clearAllInputs(){
        for (const key in inputDOMSelectors){
            console.log(inputDOMSelectors[key].value = "");
        }
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

