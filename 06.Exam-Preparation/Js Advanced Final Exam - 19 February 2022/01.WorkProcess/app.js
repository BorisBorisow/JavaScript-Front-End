function solve() {
    let totalSalary = Number(0);

    const tbody = document.getElementById("tbody");
    const salarySection = document.getElementById("sum");


    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const salary = document.getElementById("salary");
    const btnAdd = document.getElementById("add-worker")
        .addEventListener("click", (e) => {
            if (e) {
                e.preventDefault();
            }
            
            let firstNameEl = firstName.value;
            let lastNameEl = lastName.value;
            let emailEl = email.value;
            let birthEl = birth.value;
            let positionEl = position.value;
            let salaryEl = salary.value;
            
            if (firstNameEl == "" || lastNameEl == "" || emailEl == "" || birthEl == "" || positionEl == "" || salaryEl == ""){
                return;
            }
            const tr = createElement("tr", tbody);
            createElement("td", tr, `${firstNameEl}`)
            createElement("td", tr, `${lastNameEl}`)
            createElement("td", tr, `${emailEl}`)
            createElement("td", tr, `${birthEl}`)
            createElement("td", tr, `${positionEl}`)
            createElement("td", tr, `${salaryEl}`)
            
            const td = createElement("td", tr);
            const firedBtn = createElement("button", td, "Fired", "fired")
            .addEventListener("click", (e) =>{
                totalSalary -= Number(salaryEl);
                console.log(totalSalary, salary.value)
                salarySection.textContent = totalSalary.toFixed(2)
                e.target.parentNode.parentNode.remove();
            });
            const editBtn = createElement("button", td, "Edit", "edit")
            .addEventListener("click", (e) =>{
                firstName.value = firstNameEl;
                lastName.value = lastNameEl;
                email.value = emailEl;
                birth.value = birthEl;
                position.value = positionEl;
                salary.value = salaryEl;

                totalSalary -= Number(salary.value);
                salarySection.textContent = totalSalary.toFixed(2)
                e.target.parentNode.parentNode.remove();
            });
            totalSalary += Number(salary.value);
            salarySection.textContent = totalSalary.toFixed(2)

            
            clearAllInputs();
        })

    function clearAllInputs(){
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";
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
solve()