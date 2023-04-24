window.addEventListener("load", solve);

function solve() {
    const defaultInputSelectors = {
        title: null,
        category: null,
        content: null,
    };

    inputDOMSelectors = {
        title: document.getElementById("task-title"),
        category: document.getElementById("task-category"),
        content: document.getElementById("task-content"),
    };

    const publishBtn = document.getElementById("publish-btn");
    publishBtn.addEventListener("click", onPublish);
    
    const reviewList = document.getElementById("review-list");
    const publishedList = document.getElementById("published-list");

    function onPublish(e){
        if (e){
            e.preventDefault();
        }

        let allInputsAreFilled = Object.values(inputDOMSelectors)
            .every(x => x.value != "");

        if(!allInputsAreFilled){
            return;
        }

        const li = createElement("li", reviewList, "", "rpost");
        const article = createElement("article", li);
        createElement("h4", article, inputDOMSelectors.title.value);
        createElement("p", article, `Category: ${inputDOMSelectors.category.value}`);
        createElement("p", article, `Content: ${inputDOMSelectors.content.value}`);
        const editBtn = createElement("button", li, "Edit", "action-btn edit");
        editBtn.addEventListener("click", onEdit);
        const postBtn = createElement("button", li, "Post", "action-btn post");
        postBtn.addEventListener("click", onPost);

        for (const key in inputDOMSelectors){
            defaultInputSelectors[key] = inputDOMSelectors[key].value;
          }
        document.querySelector("form").reset();

        
    }

    function onEdit(e){
        if (e){
            e.preventDefault();
        }

        for (const key in inputDOMSelectors){
            inputDOMSelectors[key].value = defaultInputSelectors[key];
          }

        e.target.parentNode.remove()
    }
    function onPost(e){
        if (e){
            e.preventDefault();
        }
        let currentBtn = e.target;
        let parent = currentBtn.parentNode;
        let editBtn = Array.from(parent.children)[1];
        currentBtn.remove();
        editBtn.remove();
        

        publishedList.appendChild(parent)
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