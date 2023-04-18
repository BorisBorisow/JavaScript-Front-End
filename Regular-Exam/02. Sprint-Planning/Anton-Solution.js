window.addEventListener('load', solve);

// get form and tasks section
const createTaskForm = document.getElementById("create-task-form");
const tasksSection = document.getElementById("tasks-section");


// initialize task count and total points
let taskCount = 0;
let totalPoints = 0;

// add event listener to create task button
createTaskForm.addEventListener("submit", function(event) {
    event.preventDefault(); // превентваме изпращане на формата

    // взимаме данните от формата
    const titleInput = document.getElementById("title");
    const descInput = document.getElementById("description");
    const labelInput = document.getElementById("label");
    const pointsInput = document.getElementById("points");
    const assigneeInput = document.getElementById("assignee");

    // валидираме да не са празни полетата
    if (
        titleInput.value === "" ||
        descInput.value === "" ||
        pointsInput.value === "" ||
        assigneeInput.value === ""
    ) {
        alert("Please fill out all input fields.");
        return;
    }

    // task id и инкрементване на броя
    taskCount++;
    const taskId = "task-" + taskCount;

    // създава task article
    const taskArticle = document.createElement("article");
    taskArticle.id = taskId;
    taskArticle.className = "task-card";

// създава task header
    const taskHeader = document.createElement("h2");
    taskHeader.innerHTML = titleInput.value;
    taskArticle.appendChild(taskHeader);

// създава task body
    const taskBody = document.createElement("div");
    taskBody.className = "task-card-body";

// създава task description
    const taskDesc = document.createElement("p");
    taskDesc.className = "task-card-description";
    taskDesc.innerHTML = descInput.value;
    taskBody.appendChild(taskDesc);

// създаване на лейбърли
    const taskLabel = document.createElement("div");
    taskLabel.className = "task-card-label";

    switch (labelInput.value) {
        case "Feature":
            taskLabel.classList.add("feature");
            break;
        case "Low Priority Bug":
            taskLabel.classList.add("low-priority");
            break;
        case "High Priority Bug":
            taskLabel.classList.add("high-priority");
            break;
        default:
            taskLabel.classList.add("feature");
    }

    taskBody.appendChild(taskLabel);


    // create task estimation points
    const taskPoints = document.createElement("p");
    taskPoints.innerHTML = pointsInput.value + "pts";
    taskBody.appendChild(taskPoints);

    // create task assignee
    const taskAssignee = document.createElement("p");
    taskAssignee.innerHTML = assigneeInput.value;
    taskBody.appendChild(taskAssignee);

    // add task body to task article
    taskArticle.appendChild(taskBody);

    // add task article to tasks section
    tasksSection.appendChild(taskArticle);

    // update total points
    totalPoints += parseInt(pointsInput.value);
    const totalPointsElement = document.getElementById("total-sprint-points");
    totalPointsElement.innerHTML = "Total Points " + totalPoints + "pts";

    // clear form inputs
    titleInput.value = "";
    descInput.value = "";
    labelInput.value = "Feature";
    pointsInput.value = "";
    assigneeInput.value = "";

    // enable delete task button
    const deleteTaskButton = document.getElementById("delete-task-btn");
    deleteTaskButton.disabled = false;
});

// add event listener to delete task button
const deleteTaskButton = document.getElementById("delete-task-btn");
deleteTaskButton.addEventListener("click", function(event) {
    // get last task article
    const lastTaskArticle = tasksSection.lastElementChild;

    // remove last task article

})

function solve() {
    // TODO:
}