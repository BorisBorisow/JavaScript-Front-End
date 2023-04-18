// function attachEvent() {
//   const url = `http://localhost:3030/jsonstore/tasks/`;

//   const titleInput = document.querySelector("#title");
//   const descriptionInput = document.querySelector("#description");
//   const loadBtn = document.getElementById("load-board-btn");
//   const addTaskBtn = document.getElementById("create-task-btn");

//   const toDoSection = document.querySelector("#todo-section > ul");
//   const inProgressSection = document.querySelector("#in-progress-section > ul");
//   const codeReviewSection = document.querySelector("#code-review-section > ul");
//   const doneSection = document.querySelector("#done-section > ul");

//   loadBtn.addEventListener("click", loadTaskHandler);
//   addTaskBtn.addEventListener("click", addTaskHandler);

//   function loadTaskHandler(e) {
//     if (e) {
//       e.preventDefault();
//     }

//     toDoSection.innerHTML = "";
//     inProgressSection.innerHTML = "";
//     codeReviewSection.innerHTML = "";
//     doneSection.innerHTML = "";

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         for (let obj of Object.values(data)) {
//           if (obj.status === "ToDo") {
//             const li = createElement("li", toDoSection, "", "task");
//             createElement("h3", li, obj.title);
//             createElement("p", li, obj.description);
//             const button = createElement("button", li, "Move to In Progress", "", obj._id);
//             button.addEventListener("click", taskBtnHandler);

//           } else if (obj.status === "In Progress") {
//             const li = createElement("li", inProgressSection, "", "task");
//             createElement("h3", li, obj.title);
//             createElement("p", li, obj.description);
//             const button = createElement("button", li, "Move to Code Review", "", obj._id);
//             button.addEventListener("click", taskBtnHandler);

//           } else if (obj.status === "Code Review") {
//             const li = createElement("li", codeReviewSection, "", "task");
//             createElement("h3", li, obj.title);
//             createElement("p", li, obj.description);
//             const button = createElement("button", li, "Move to Done", "", obj._id);
//             button.addEventListener("click", taskBtnHandler);

//           } else if (obj.status === "Done") {
//             const li = createElement("li", doneSection, "", "task");
//             createElement("h3", li, obj.title);
//             createElement("p", li, obj.description);
//             const button = createElement("button", li, "Close", "", obj._id);
//             button.addEventListener("click", taskBtnHandler);
//           }
//         }
//       });
//   }
//   function taskBtnHandler(e){
//     if (e){
//         e.preventDefault();
//     }

//     let currentEl = e.currentTarget;
//     let currentId = currentEl.id

//     let headers = {
//         method: null,
//     }

//     if(currentEl.textContent.includes("Progress")){
//         headers.method = "PATCH";
//         headers.body = JSON.stringify({status: "In Progress"});
//     } else if(currentEl.textContent.includes("Code")){
//         headers.method = "PATCH";
//         headers.body = JSON.stringify({status: "Code Review"});
//     } else if (currentEl.textContent.includes("Done")){
//         headers.method = "PATCH";
//         headers.body = JSON.stringify({status: "Done"});
//     } else {
//         headers.method = "DELETE"
//     }
//     console.log(currentId)
//     console.log(headers)
//     fetch(url + currentId, headers)
//         .then(() => loadTaskHandler())
//         .catch((err) => alert(err))
   
    

//   }
  
//   function addTaskHandler(e) {
//     if (e){
//         e.preventDefault();
//     }

//     const newObj = {
//         "title": `${titleInput.value}`,
//         "description": `${descriptionInput.value}`,
//         "status": "ToDo",
//     }
//     if (titleInput.value === "" && descriptionInput.value === ""){
//         alert("Please fill the both of fields correct!")
//         return;
//     }

//     fetch(url,
//         {method: "POST",
//         body: JSON.stringify(newObj)
//     })
//     .then(() => loadTaskHandler, titleInput.value = "", descriptionInput.value = "")
//     .catch((err) => console.error(err))
//   }

  

//   function createElement(
//     type,
//     parentNode,
//     content,
//     classes,
//     id,
//     attributes,
//     useInnerHTML
//   ) {
//     const htmlElement = document.createElement(type);

//     if (content && useInnerHTML) {
//       htmlElement.useInnerHTML = content;
//     } else {
//       if (content && type === "input") {
//         htmlElement.value = content;
//       }

//       if (content && type !== "input") {
//         htmlElement.textContent = content;
//       }
//     }

//     if (classes) {
//       htmlElement.className = classes;
//     }

//     if (id) {
//       htmlElement.id = id;
//     }

//     if (attributes) {
//       for (const key in attributes) {
//         htmlElement.setAttribute(key, attributes[key]);
//       }
//     }

//     if (parentNode) {
//       parentNode.appendChild(htmlElement);
//     }
//     return htmlElement;
//   }
// }

// attachEvent();

function attachEvents() {
	const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
	const newButtons = {
		'ToDo': 'Move to In Progress',
		'In Progress': 'Move to Code Review',
		'Code Review': 'Move to Done',
		'Done': 'Close'
	}

	const columns = {
		'ToDo': document.querySelector('#todo-section .task-list'),
		'In Progress': document.querySelector('#in-progress-section .task-list'),
		'Code Review': document.querySelector('#code-review-section .task-list'),
		'Done': document.querySelector('#done-section .task-list')
	}
	const loadBtn = document.querySelector('#load-board-btn')
	const addBtn = document.querySelector('#create-task-btn')

	loadBtn.addEventListener('click', loadAllTasks)
	addBtn.addEventListener('click', addTask)

	async function loadAllTasks(event) {
		const response = await fetch(BASE_URL)
		const data = await response.json()

		Object.values(columns).forEach(x => x.textContent = '')

		for (const key in data) {
			const status = data[key].status
			const newChild = newTask(data[key])
			columns[status].appendChild(newChild)
		}

	}

	async function addTask() {
		const titleField = document.querySelector('#title')
		const descriptionField = document.querySelector('#description')

		const titleValue = titleField.value
		const descValue = descriptionField.value

		titleField.value = ''
		descriptionField.value = ''

		await apiRequest({
			url: BASE_URL,
			method: 'POST',
			item: {
				title: titleValue,
				description: descValue,
				status: 'ToDo',
			}
		})

		await loadAllTasks()
	}

	async function moveToNextColumn(event) {
		const parent = event.target.parentElement
		const parentId = parent.id
		const newStatus = parent.querySelector('button').textContent

		if (newStatus === 'Move to In Progress') {
			await apiRequest({ url: BASE_URL, method: 'PATCH', id: parentId, item: { status: 'In Progress' } })
		} else if (newStatus === 'Move to Code Review') {
			await apiRequest({ url: BASE_URL, method: 'PATCH', id: parentId, item: { status: 'Code Review' } })
		} else if (newStatus === 'Move to Done') {
			await apiRequest({ url: BASE_URL, method: 'PATCH', id: parentId, item: { status: 'Done' } })
		} else if (newStatus === 'Close') {
			await apiRequest({ url: BASE_URL, method: 'DELETE', id: parentId })
		}
		await loadAllTasks()

	}

	function newTask(data) {
		[title, description, status, _id] = Object.values(data)
		const li = createElement('li', null, null, _id, ['task'])
		createElement('h3', title, li)
		createElement('p', description, li)
		const taskBtn = createElement('button', newButtons[status], li)
		taskBtn.addEventListener('click', moveToNextColumn)
		return li
	}

	async function apiRequest({ url = '', method = '', id = '', item = '' }) {
		const options = {
			method: method
		}

		if (['PATCH', 'POST'].includes(method)) {
			options.headers = { 'Content-Type': 'application/json' }
			options.body = JSON.stringify(item)
		}

		const data = await fetch(`${url}${id}`, options)
		return await data.json()
	}

	function createElement(type, content, parentNode, id, classes, attrs) {
		const htmlElement = document.createElement(type);

		if (content && type !== 'input') {
			htmlElement.textContent = content;
		}

		if (content && type === 'input') {
			htmlElement.value = content;
		}

		if (id) {
			htmlElement.id = id;
		}

		if (classes) {
			htmlElement.classList.add(...classes);
		}

		if (parentNode) {
			parentNode.appendChild(htmlElement);
		}

		if (attrs) {
			for (const key in attrs) {
				htmlElement.setAttribute(key, attrs[key]);
			}
		}

		return htmlElement;

	}

}

attachEvents();