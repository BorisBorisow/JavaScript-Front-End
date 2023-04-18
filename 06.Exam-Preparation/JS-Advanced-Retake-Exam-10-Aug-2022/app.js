window.addEventListener("load", solve);

function solve() {
  let dishesProgress = 0;

  const defaultInputs = {
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
    description: null,
    
  };

  const inputDOMSelectors = {
      firstName: document.getElementById("first-name"),
      lastName: document.getElementById("last-name"),
      age: document.getElementById("age"),
      gender: document.getElementById("genderSelect"),
      description: document.getElementById("task"),
  };

  const otherDOMSelectors = {
    submitBtn: document.getElementById("form-btn"),
    inProgress: document.getElementById("in-progress"),
    progressCount: document.querySelector("#progress-count"),
    finishedSection: document.querySelector("#finished"),
    clearBtn: document.getElementById("clear-btn"),
  };

  otherDOMSelectors.submitBtn.addEventListener("click", onSubmit);
  otherDOMSelectors.clearBtn.addEventListener("click", onClear);

  function onSubmit(e){
    if(e){
      e.preventDefault();
    }

    dishesProgress++;
    const allInputsFilled = Object.values(inputDOMSelectors).every((x) => x.value !== "");

    if (!allInputsFilled) {
      return;
    }
    console.log(otherDOMSelectors.inProgress)
    let {firstName, lastName, age, gender,  description}  = inputDOMSelectors;
    const li = createElement("li", otherDOMSelectors.inProgress, "", "each-line");
    const article = createElement("article", li);
    createElement("h4", article, `${firstName.value} ${lastName.value}`);
    createElement("p", article, `${gender.value}, ${age.value}`);
    createElement("p", article, `Dish description: ${description.value}`);
    const editBtn = createElement("button", li, "Edit", "edit-btn");
    const completeBtn = createElement("button", li, "Mark as complete", "complete-btn");
    editBtn.addEventListener("click", onEdit);
    completeBtn.addEventListener("click", onComplete);

    for (const key in inputDOMSelectors){
      defaultInputs[key] = inputDOMSelectors[key].value;
    }

    otherDOMSelectors.progressCount.textContent = dishesProgress;
    document.querySelector("form").reset()
  }

  function onEdit(e){
    

    const parent = e.currentTarget.parentNode
    for (const key in inputDOMSelectors){
      inputDOMSelectors[key].value = defaultInputs[key];
    }
    dishesProgress--;
    otherDOMSelectors.progressCount.textContent = dishesProgress;
    parent.remove()
  }

  function onComplete(e){
   

    dishesProgress -= 1;
    otherDOMSelectors.progressCount.textContent = dishesProgress;
    const parent = e.currentTarget.parentNode;
    otherDOMSelectors.finishedSection.appendChild(parent);
    let editBtn = document.querySelector("#finished > li > button.edit-btn");
    let markBtn = document.querySelector("#finished > li > button.complete-btn");
    editBtn.remove();
    markBtn.remove()

    
  }

  function onClear(e){
    let toDelete = Array.from(otherDOMSelectors.finishedSection.querySelectorAll("li"));
    toDelete.forEach(x => x.remove())
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
