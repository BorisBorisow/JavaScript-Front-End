window.addEventListener('load', solve);

function solve() {

    const defaultInputs = {
        firstName: null,
        lastName: null,
        peopleNumber: null,
        date: null,
        days: null,
    }
    const inputDOMSelectors = {
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        peopleNumber: document.getElementById("people-count"),
        date: document.getElementById("from-date"),
        days: document.getElementById("days-count"),
    };

    const otherDOMSelectors = {
        nextBtn: document.getElementById("next-btn"),
        previewContainer: document.getElementById("first-container"),
        ticketInfoList: document.querySelector("#info-ticket > div > div > ul"),
        confirmTicketList: document.querySelector("#confirm-ticket-section > div > div > ul"),
    };

    otherDOMSelectors.nextBtn.addEventListener("click", nextBtnHandler);

    function nextBtnHandler(e){
        if (e){
            e.preventDefault();
        }
        const allFieldsHaveValue = Object.values(inputDOMSelectors)
        .every((el) => el.value !== "");
  
      if (!allFieldsHaveValue) {
        return;
      }
  
        
        const {firstName, lastName, peopleNumber, date, days} = inputDOMSelectors;
        const li = createElement("li", otherDOMSelectors.ticketInfoList, "", "ticket");
        const article = createElement("article", li);
        createElement("h3", article, "Name: " + firstName.value + " " + lastName.value);
        createElement("p", article, "From date: " + date.value);
        createElement("p", article, "For " + days.value + " days");
        createElement("p", article, "For " + peopleNumber.value + " people");
        const editBtn = createElement("button", li, "Edit", "edit-btn");
        editBtn.addEventListener("click", editBtnHandler);
        const continueBtn = createElement("button", li, "Continue", "continue-btn");
        continueBtn.addEventListener("click", continueBtnHandler);

        for (const key in inputDOMSelectors){
            defaultInputs[key] =inputDOMSelectors[key].value
        }
        otherDOMSelectors.nextBtn.disabled = true;
        document.querySelector("form").reset()
       
    }
    
    
    function editBtnHandler(e){
        for (const key in inputDOMSelectors){
            inputDOMSelectors[key].value = defaultInputs[key];
        }
        const parent = e.target.parentNode;
        parent.remove()
        otherDOMSelectors.nextBtn.disabled = false;
       
    }

    function continueBtnHandler(e){
        const parent = e.target.parentNode;
        otherDOMSelectors.confirmTicketList.appendChild(parent)
        document.querySelector('.edit-btn').remove();
        document.querySelector('.continue-btn').remove();
        const liElement = document.querySelector("#confirm-ticket-section > div > div > ul > li");
        liElement.removeAttribute("ticket");
        liElement.className = "ticket-content"
        let confirmBtn = createElement('button', liElement, 'Confirm', "confirm-btn");
        let cancelBtn = createElement('button', liElement, 'Cancel', "cancel-btn");
        confirmBtn.addEventListener("click", confirmBtnHandler)
        cancelBtn.addEventListener("click", cancelBtnHandler)
        
    }
    function confirmBtnHandler(e){
        const main = document.getElementById("main");
        const body = main.parentNode;
        main.remove()
        const h1 = createElement("h1", body, "Thank you, have a nice day!", "", "thank-you")
        const backBtn = createElement("button", body, "Back", "", "back-btn")
        backBtn.addEventListener("click", () => location.reload())
    }

    function cancelBtnHandler(e){
        e.target.parentNode.remove();
        otherDOMSelectors.nextBtn.removeAttribute("disabled");
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