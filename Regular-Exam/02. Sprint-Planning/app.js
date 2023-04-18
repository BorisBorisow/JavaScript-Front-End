function solve() {
  const inputDOMSelectors = {
    title: document.getElementById("title"),
    description: document.getElementById("description"),
    label: document.getElementById("label"),
    points: document.getElementById("points"),
    assignee: document.getElementById("assignee"),
  };

  const otherDOMSelectors = {
    createTaskBtn: document.getElementById("create-task-btn"),
    deleteTaskBtn: document.getElementById("delete-task-btn"),
    tasksSection: document.getElementById("tasks-section"),
    form: document.querySelector("form"),
    totalSprintPoints: document.getElementById("total-sprint-points"),
    taskIdElement: document.getElementById("task-id"),
  };

  let totalPoints = 0;
  let taskId = 0;

  otherDOMSelectors.createTaskBtn.addEventListener("click", createTaskHandler);
  otherDOMSelectors.deleteTaskBtn.addEventListener("click", deleteTaskHandler);

  function createTaskHandler() {
    let allInputsAreFilled = Object.values(inputDOMSelectors).every(
      (input) => input.value !== ""
    );

    if (!allInputsAreFilled) {
      alert("Please fill out all required fields correct");
      return;
    }

    taskId++;
    totalPoints += parseInt(inputDOMSelectors.points.value);

    // const additionalStyles = {
    //     "Feature": ["feature", '&#8865;'],
    //     "Low Priority Bug": ["low-priority", '&#9737;'],
    //     "High Priority Bug": ["high-priority", '&#9888;'],
    // }

    const { title, description, label, points, assignee } = inputDOMSelectors;
    const tasksSection = otherDOMSelectors.tasksSection;
    const article = createElement(
      "article",
      tasksSection,
      "",
      ["task-card"],
      `task-${taskId}`
    );

    // createElement("div", article, ``, [`task-card-label ${label.value.toLowerCase()}`], "", "", `${label.value} ${additionalStyles[label.value][1]}`)

    const div = document.createElement("div");
    if (label.value == "Feature") {
      div.setAttribute("class", "task-card-label feature");
      div.innerHTML = `Feature &#8865;`;
    } else if (label.value == "Low Priority Bug") {
      div.setAttribute("class", "task-card-label low-priority");
      div.innerHTML = `Low Priority Bug &#9737;`;
    } else if (label.value == "High Priority Bug") {
      div.setAttribute("class", "task-card-label high-priority");
      div.innerHTML = `High Priority Bug &#9888;`;
    }
    article.appendChild(div);

    createElement("h3", article, `${title.value}`, ["task-card-title"]);
    createElement("p", article, `${description.value}`, [
      "task-card-description",
    ]);
    createElement("div", article, `Estimated at ${points.value} pts`, [
      "task-card-points",
    ]);
    createElement("div", article, `Assigned to: ${assignee.value}`, [
      "task-card-assignee",
    ]);
    let div4 = createElement("div", article, "", ["task-card-actions"]);
    let deleteBtn = createElement("button", div4, "Delete");
    deleteBtn.addEventListener("click", deleteFunc);

    otherDOMSelectors.totalSprintPoints.textContent = `Total Points ${totalPoints}pts`;
    inputDOMSelectors.label.value = "";
    //   otherDOMSelectors.form.reset();
    clearAllInputs();
  }
  function deleteFunc() {
    const sectionToDelete = this.parentNode.parentNode;
    let label = sectionToDelete.children[0].textContent;

    if (label.includes("Feature")) {
      inputDOMSelectors.label.value = "Feature";
    } else if (label.includes("Low")) {
      inputDOMSelectors.label.value = "Low Priority Bug";
    } else if (label.includes("High")) {
      inputDOMSelectors.label.value = "High Priority Bug";
    }

    inputDOMSelectors.title.value = sectionToDelete.children[1].textContent;
    inputDOMSelectors.description.value =
      sectionToDelete.children[2].textContent;
    inputDOMSelectors.points.value =
      sectionToDelete.children[3].textContent.split(" ")[2];
    inputDOMSelectors.assignee.value =
      sectionToDelete.children[4].textContent.split(": ")[1];

    inputDOMSelectors.title.disabled = true;
    inputDOMSelectors.description.disabled = true;
    inputDOMSelectors.points.disabled = true;
    inputDOMSelectors.assignee.disabled = true;
    inputDOMSelectors.label.disabled = true;
    otherDOMSelectors.createTaskBtn.disabled = true;
    otherDOMSelectors.deleteTaskBtn.disabled = false;

    taskIdElement = this.parentNode.parentNode.id;
  }

  function deleteTaskHandler() {
    totalPoints -= parseInt(inputDOMSelectors.points.value);
    otherDOMSelectors.totalSprintPoints.textContent = `Total Points ${totalPoints}pts`;
    document.getElementById(taskIdElement).remove();

    
    inputDOMSelectors.title.disabled = false;
    inputDOMSelectors.description.disabled = false;
    inputDOMSelectors.points.disabled = false;
    inputDOMSelectors.assignee.disabled = false;
    inputDOMSelectors.label.disabled = false;
    otherDOMSelectors.createTaskBtn.disabled = false;
    otherDOMSelectors.deleteTaskBtn.disabled = true;
    //   otherDOMSelectors.form.reset();
    clearAllInputs();
  }
  
  function clearAllInputs() {
    inputDOMSelectors.title.value = "";
    inputDOMSelectors.description.value = "";
    inputDOMSelectors.points.value = "";
    inputDOMSelectors.label.value = "";
    inputDOMSelectors.assignee.value = "";
  }

  function createElement(
    type,
    parentNode,
    content,
    classes,
    id,
    attributes,
    useInnerHtml
  ) {
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
      htmlElement.classList.add(...classes);
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
