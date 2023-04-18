window.addEventListener('load', solve);

function solve() {
    const defaultInputs = {
        firstName: null,
        lastName: null,
        checkIn: null,
        checkOut: null,
        numberOfGuests: null,
    };
    const inputDOMSelectors = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        checkIn: document.getElementById("date-in"),
        checkOut: document.getElementById("date-out"),
        numberOfGuests: document.getElementById("people-count"),
    };
    const otherDOMSelectors = {
        nextBtn: document.getElementById("next-btn"),
        reservationList: document.querySelector("#info-reservations > div > div > ul"),
        confirmList: document.querySelector("#confirm-reservations > div > div > ul"),
        verification: document.getElementById("verification"),
    };

    otherDOMSelectors.nextBtn.addEventListener("click", onNext);
    
    function onNext(e){
        if(e){
            e.preventDefault();
        }

        let allFieldsAreFilled = Object.values(inputDOMSelectors)
            .every((x) => x.value !== "");
        if (!allFieldsAreFilled) {
            return;
        }

        
        const {firstName, lastName, checkIn, checkOut, numberOfGuests} = inputDOMSelectors;
        const li = createElement("li", otherDOMSelectors.reservationList, "", "reservation-content");
        const article = createElement("article", li);
        createElement("h3", article, `Name: ${firstName.value} ${lastName.value}`);
        createElement("p", article, `From date: ${checkIn.value}`);
        createElement("p", article, `To date: ${checkOut.value}`);
        createElement("p", article, `For ${numberOfGuests.value} people`);
        const editBtn = createElement("button", li, "Edit", "edit-btn");
        editBtn.addEventListener("click", onEdit)
        const continueBtn = createElement("button", li, "Continue", "continue-btn");
        continueBtn.addEventListener("click", onContinue);
        
        for (const key in inputDOMSelectors){
            defaultInputs[key] = inputDOMSelectors[key].value;

        }
        
        e.target.disabled = true;
        document.querySelector("form").reset()
    }

    function onEdit(e){
        for (const key in inputDOMSelectors){
            otherDOMSelectors.nextBtn.disabled = false;
            inputDOMSelectors[key].value = defaultInputs[key];
        }
        let parent = e.currentTarget.parentNode;
        parent.remove()
    }

    function onContinue(e){
        let parent = e.currentTarget.parentNode;
        otherDOMSelectors.confirmList.appendChild(parent);
        let confirmBtn = document.querySelector("#confirm-reservations > div > div > ul > li > button.edit-btn");
        confirmBtn.removeAttribute("edit-btn");
        confirmBtn.className = "confirm-btn";
        confirmBtn.textContent = "Confirm";
        confirmBtn.addEventListener("click", onConfirm);
        let cancelBtn = document.querySelector("#confirm-reservations > div > div > ul > li > button.continue-btn");
        cancelBtn.className = "cancel-btn";
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener("click", onCancel);


        
    }

    function onConfirm(e) {
        document.querySelector("form").reset()
        otherDOMSelectors.nextBtn.disabled = false;

        let parent = e.currentTarget.parentNode;
        parent.remove()
        otherDOMSelectors.verification.className = "reservation-confirmed";
        otherDOMSelectors.verification.textContent = "Confirmed."
    }

    function onCancel(e) {
        document.querySelector("form").reset()
        otherDOMSelectors.nextBtn.disabled = false;

        let parent = e.currentTarget.parentNode;
        parent.remove()
        otherDOMSelectors.verification.className = "reservation-cancelled";
        otherDOMSelectors.verification.textContent = "Cancelled."
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



    
    
