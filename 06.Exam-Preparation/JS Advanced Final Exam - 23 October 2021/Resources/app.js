window.addEventListener('load', solve);

function solve() {
    let likes = 0;

    const inputDOMSelectors = {
        "genre": document.getElementById("genre"),
        "name": document.getElementById("name"),
        "author": document.getElementById("author"),
        "date": document.getElementById("date")
    };

    const otherDOMSelectors = {
        "collectedSection": document.querySelector(".all-hits-container"),
        "savedSection": document.querySelector(".saved-container"),
        "addBtn": document.getElementById("add-btn"),
        "likesP": document.querySelector(".likes > p"),
    }

    otherDOMSelectors.addBtn.addEventListener("click", onAdd);

    function onAdd(e){
        if (e){
            e.preventDefault();
        }
        const allInputsAreFilled = Object.values(inputDOMSelectors)
            .every(x => x.value !== "");

        if (!allInputsAreFilled){
            return;
        }

        const div = createElement("div", otherDOMSelectors.collectedSection, "", "hits-info");
        createElement("img", div, "", "", "", {src: "./static/img/img.png"});
        createElement("h2", div, `Genre: ${inputDOMSelectors.genre.value}`);
        createElement("h2", div, `Name: ${inputDOMSelectors.name.value}`);
        createElement("h2", div, `Author: ${inputDOMSelectors.author.value}`);
        createElement("h3", div, `Date: ${inputDOMSelectors.date.value}`);
        const saveBtn = createElement("button", div, `Save song`, "save-btn")
            .addEventListener("click", onSave);
        const likeBtn = createElement("button", div, `Like song`, "like-btn")
            .addEventListener("click", onLike);
        const deleteBtn = createElement("button", div, `Delete`, "delete-btn")
            .addEventListener("click", onDelete);

            document.querySelector("form").reset();
    }

    function onSave(e){
        let current = e.target;
        let parentDiv = current.parentNode;
        current.nextElementSibling.remove()
        current.remove()
        otherDOMSelectors.savedSection.appendChild(parentDiv);
        
    }

    function onLike(e){
        const current = e.target;
        likes++;
        otherDOMSelectors.likesP.textContent = `Total Likes: ${likes}`;
        current.disabled = true;
    }

    function onDelete(e){
        let current = e.target;
        let parent = current.parentNode;
        parent.remove()
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