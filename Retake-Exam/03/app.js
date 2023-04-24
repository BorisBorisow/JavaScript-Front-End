function solve(){
    const url = "http://localhost:3030/jsonstore/tasks/";
    let inputDomSelectors = {
        titleInput: document.querySelector("#course-name"),
        typeInput: document.querySelector("#course-type"),
        descriptionInput: document.querySelector("#description"),
        teacherNameInput: document.querySelector("#teacher-name"),
    }
    let elementId;

    const addCourseBtn = document.querySelector("#add-course");
    addCourseBtn.addEventListener("click", onAdd)
    const editCourseBtn = document.querySelector("#edit-course");
    editCourseBtn.addEventListener("click", onEdit);

    const loadBtn = document.querySelector("#load-course");
    loadBtn.addEventListener("click", onLoad);

    const CoursesContainer = document.getElementById("list");

    function onAdd(e){
        if (e) {
            e.preventDefault();
        }
        // console.log("Hi")
        let currentTitle = inputDomSelectors.titleInput.value;
        let currentType = inputDomSelectors.typeInput.value;
        let currentDescription = inputDomSelectors.descriptionInput.value;
        let currentTeacher = inputDomSelectors.teacherNameInput.value;

        if(!currentTitle || !currentType || !currentDescription || !currentTeacher){
            return;
        }

        let newObj = {
            "title": currentTitle,
            "type": currentType,
            "description": currentDescription,
            "teacher": currentTeacher
        }

        let headers = {
            method: "POST",
            body: JSON.stringify(newObj)
        }

        fetch(url, headers)
            .then(() => onLoad(), Object.values(inputDomSelectors).forEach((current) => current.value = ""))
    }

    function onEdit(e){
        if (e) {
            e.preventDefault();
        }

        let ObjToEdit = {
                "title": inputDomSelectors.titleInput.value,
                "type": inputDomSelectors.typeInput.value,
                "description": inputDomSelectors.descriptionInput.value,
                "teacher": inputDomSelectors.teacherNameInput.value
            }

        headers = {
            method: "PATCH",
            body: JSON.stringify(ObjToEdit)
        }

        fetch(url + elementId, headers)
            .then(() => onLoad(), Object.values(inputDomSelectors).forEach((current) => current.value = ""), addCourseBtn.disabled = false, editCourseBtn.disabled = true);
        // addCourseBtn.disabled = false;
        // editCourseBtn.disabled = true;

        
    }

    function onLoad(e){
        if (e) {
            e.preventDefault();
        }
        // console.log("Hi")
        CoursesContainer.innerHTML = "";
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                for (const obj of Object.values(data)){
                    let {title, type, description, teacher, _id} = obj;
                 
                    const div = createElement("div", CoursesContainer, "", "container", _id);
                    createElement("h2", div, title);
                    createElement("h3", div, teacher);
                    createElement("h3", div, type);
                    createElement("h4", div, description);
                    const editBtn  = createElement("button", div, "Edit Course", "edit-btn");
                    editBtn.addEventListener("click", editFunction);
                    const finishBtn  = createElement("button", div, "Finis Course", "finish-btn");
                    finishBtn.addEventListener("click", finishFunction);
                    
                    
                }
            })
        function editFunction(e){
            let currentEl = e.target;
            let parent = currentEl.parentNode;
            let id = parent.id;
            elementId = id;
            // console.log(id)
            let children = Array.from(parent.children);
            let [title, teacher, type, description] = children;
            
            inputDomSelectors.titleInput.value = title.textContent;
            inputDomSelectors.typeInput.value = type.textContent;
            inputDomSelectors.descriptionInput.value = description.textContent;
            inputDomSelectors.teacherNameInput.value = teacher.textContent;
            
            editCourseBtn.disabled = false;
            addCourseBtn.disabled = true;
            parent.remove();
            

        }
        function finishFunction(e){
            let currentEl = e.target;
            let parent = currentEl.parentNode;
            let id = parent.id;
            // elementId = id;

            headers = {
                method: "DELETE",
            }

            fetch(url + id, headers)
                .then(() => onLoad())
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

solve();