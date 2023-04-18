window.addEventListener("load", solve);

function solve() {

  const inputsCopy = {
    title: null,
    category: null,
    content: null,
  };

  const inputDOMSelectors = {
    title: document.getElementById("post-title"),
    category: document.getElementById("post-category"),
    content: document.getElementById("post-content"),
  };

  const reviewList = document.getElementById("review-list");
  const publishedList = document.getElementById("published-list");

  const publishBtn = document.getElementById("publish-btn")
    .addEventListener("click", onPublish);

  const clearBtn = document.getElementById("clear-btn")
    .addEventListener("click", onClear);

  function onPublish(e){
    if (e){
      e.preventDefault();
    }

    const allFieldsAreFilled = Object.values(inputDOMSelectors)
      .every((input) => input.value !== "");
      
    
    if (!allFieldsAreFilled){
      return;
    }

    const {title, category, content} = inputDOMSelectors;
    const li = createElement("li", reviewList, "", "rpost")
    const article = createElement("article", li);
    createElement("h4", article, title.value);
    createElement("p", article, `Category: ${category.value}`);
    createElement("p", article, `Content: ${content.value}`);
    const approveBtn = createElement("button", li, "Approve", "action-btn approve")
      .addEventListener("click", onApprove);
    const editBtn = createElement("button", li, "Edit", "action-btn edit")
      .addEventListener("click", onEdit);

    for (const key in inputDOMSelectors){
      inputsCopy[key] = inputDOMSelectors[key].value;
    }
    document.querySelector("form").reset()
  }

  function onEdit(e){
    for (const key in inputDOMSelectors){
      inputDOMSelectors[key].value = inputsCopy[key];
    }
    let currentEl = e.currentTarget;
    let parentEl = currentEl.parentNode;
    parentEl.remove()

  }
  
  function onApprove(e){
    let currentEl = e.currentTarget;
    let parentEl = currentEl.parentNode;
    // let buttons = Array.from(parentEl.children.querySelectorAll("button"))
    const children = Array.from(parentEl.children).splice(1,2).forEach(e => e.remove())
    publishedList.appendChild(parentEl);
  }

  function onClear(e){
    let parent = e.target.parentNode;
    let liElements = Array.from(parent.querySelectorAll("li"))
      .forEach((li) => li.remove())
  }


  function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml ){
    const htmlElement = document.createElement(type);

    if (useInnerHtml){
      htmlElement.innerHTML = content;
    } else {
      if (content && type === "input") {
        htmlElement.value = content;
      }
      if (content && type !== "input"){
        htmlElement.textContent = content;
      }
    }

    if (classes){
     htmlElement.className = classes;
    }

    if (id) {
      htmlElement.id = id;
    }

    if(attributes){
      for (const key in attributes){
        htmlElement.setAttribute(key, attributes[key])
      }
    }

    if (parentNode){
      parentNode.appendChild(htmlElement);
    }
    return htmlElement;
  }
}
