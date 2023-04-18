function attachEvent(){
  const url = `http://localhost:3030/jsonstore/tasks/`;

  const titleInput = document.querySelector("#title");
  const descriptionInput = document.querySelector("#description");
  const loadBtn = document.getElementById("load-board-btn");
  const addTaskBtn = document.getElementById("create-task-btn");

  const toDoSection = document.querySelector("#todo-section > ul");
  const inProgressSection = document.querySelector("#in-progress-section > ul");
  const codeReviewSection = document.querySelector("#code-review-section > ul");
  const doneSection = document.querySelector("#done-section > ul");

  loadBtn.addEventListener("click", loadTaskHandler);
  addTaskBtn.addEventListener("click", addTaskHandler);


  async function loadTaskHandler(e){
    if (e) {
      e.preventDefault()
    }
    toDoSection.innerHTML = "";
    inProgressSection.innerHTML = "";
    codeReviewSection.innerHTML = "";
    doneSection.innerHTML = "";
    
    const res = await fetch(url);
    const data = await res.json();

    Object.values(data).forEach(obj => {
      if (obj.status === "ToDo") {
        const li = createElement("li", toDoSection, "", "task");
        createElement("h3", li, obj.title);
        createElement("p", li, obj.description);
        const button = createElement("button", li, "Move to In Progress", "", obj._id);
        button.addEventListener("click", taskBtnHandler);

      } else if (obj.status === "In Progress") {
        const li = createElement("li", inProgressSection, "", "task");
        createElement("h3", li, obj.title);
        createElement("p", li, obj.description);
        const button = createElement("button", li, "Move to Code Review", "", obj._id);
        button.addEventListener("click", taskBtnHandler);

      } else if (obj.status === "Code Review") {
        const li = createElement("li", codeReviewSection, "", "task");
        createElement("h3", li, obj.title);
        createElement("p", li, obj.description);
        const button = createElement("button", li, "Move to Done", "", obj._id);
        button.addEventListener("click", taskBtnHandler);

      } else if (obj.status === "Done") {
        const li = createElement("li", doneSection, "", "task");
        createElement("h3", li, obj.title);
        createElement("p", li, obj.description);
        const button = createElement("button", li, "Close", "", obj._id);
        button.addEventListener("click", taskBtnHandler);
      }
    })
    
  }

  function taskBtnHandler(e){
    if (e){
      e.preventDefault()
    }
 
    let currentEl = e.currentTarget;
    let currentId = currentEl.id
  }

  async function addTaskHandler(e){
    if (e) {
      e.preventDefault()
    }

    let currentEl = e.currentTarget;
    let currentId = currentEl.id;

    let headers = {
      method: null,
    }
    if(currentEl.textContent.includes("Progress")){
      headers.method = "PATCH";
      headers.body = JSON.stringify({status: "In Progress"});
    } else if(currentEl.textContent.includes("Code")){
        headers.method = "PATCH";
        headers.body = JSON.stringify({status: "Code Review"});
    } else if (currentEl.textContent.includes("Done")){
        headers.method = "PATCH";
        headers.body = JSON.stringify({status: "Done"});
    } else {
        headers.method = "DELETE"
    }

    await AwaitRespo


  }

  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHTML
  ) {
    const htmlElement = document.createElement(type);

    if (content && useInnerHTML) {
      htmlElement.useInnerHTML = content;
    } else {
      if (content && type === "input") {
        htmlElement.value = content;
      }

      if (content && type !== "input") {
        htmlElement.textContent = content;
      }
    }

    if (classes) {
      htmlElement.className = classes;
    }

    if (id) {
      htmlElement.id = id;
    }

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




attachEvent();