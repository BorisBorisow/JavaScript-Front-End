function solve() {
    const inputDOMSelectors = {
        name: document.getElementById("recipientName"),
        title: document.getElementById("title"),
        message: document.getElementById("message"),
    };


    const listMails = document.getElementById("list");
    const sentMails = document.querySelector(".sent-list")
    const deletedMails = document.querySelector(".delete-list")
    
    const addBtn = document.getElementById("add")
        .addEventListener("click", onAdd);
    const resetBtn = document.getElementById("reset")
        .addEventListener("click", onReset);

    

    function onAdd(e){
        if (e){
            e.preventDefault();
        }
        const allFieldsHaveValue = Object.values(inputDOMSelectors)
        .every((el) => el.value !== "");

        if(!allFieldsHaveValue){
            return;
        }

        const {name, title, message} = inputDOMSelectors;
        const li = createElement("li", listMails);
        createElement("h4", li, `Title: ${title.value}`);
        createElement("h4", li, `Recipient Name: ${name.value}`);
        createElement("span", li, `${message.value}`);
        const div = createElement("div", li, "", "", "list-action");
        const sendBtn = createElement("button", div, "Send", "", "send", {type: "submit"})
            .addEventListener("click", onSend);
        const deleteBtn = createElement("button", div, "Delete", "", "delete", {type: "submit"})
            .addEventListener("click", onDelete);

        name.value = "";
        title.value = "";
        message.value = "";

    }

    function onReset(e){
        if (e){
            e.preventDefault();
        }
        const {name, title, message} = inputDOMSelectors;

        name.value = "";
        title.value = "";
        message.value = "";
        
    }

    function onSend(e){
        let currentLi = e.target.parentNode.parentNode;
        const li = createElement("li", sentMails);
        let title = e.target.parentNode.parentNode.querySelector("h4:nth-child(1)")
            .textContent.split(": ").slice(1,);
        let name = e.target.parentNode.parentNode.querySelector("h4:nth-child(2)");
        name = name.textContent.split(": ").slice(1,);
        createElement("span", li, `To: ${name}`);
        createElement("span", li, `Title: ${title}`);
        const div = createElement("div", li, "", "btn");
        createElement("button", div, "Delete", "delete", "", {type: "submit"})
            .addEventListener("click", (e) => {
                let parentLi = e.target.parentNode.parentNode;
                parentLi.querySelector("button").remove()
                deletedMails.appendChild(parentLi)
            })
        
        currentLi.remove()
    }
    function onDelete(e){
        let currentLi = e.target.parentNode.parentNode;

        const li = createElement("li", deletedMails);
        let title = e.target.parentNode.parentNode.querySelector("h4:nth-child(1)")
            .textContent.split(": ").slice(1,);
        let name = e.target.parentNode.parentNode.querySelector("h4:nth-child(2)");
        name = name.textContent.split(": ").slice(1,);
        createElement("span", li, `To: ${name}`);
        createElement("span", li, `Title: ${title}`);
        currentLi.remove()

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


solve();