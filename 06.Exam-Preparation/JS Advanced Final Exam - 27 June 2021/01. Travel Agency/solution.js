window.addEventListener('load', solution);

function solution() {
    const defaultInputSelectors = {
      "fname": null,
      "email": null,
      "phone": null,
      "address": null,
      "code": null,
  };

  const inputDOMSelectors = {
      "fname": document.getElementById("fname"),
      "email": document.getElementById("email"),
      "phone": document.getElementById("phone"),
      "address": document.getElementById("address"),
      "code": document.getElementById("code"),
  };

  const previewSection = document.getElementById("infoPreview");
  const block = document.getElementById("block");
  const editBtn = document.getElementById("editBTN");
  editBtn.addEventListener("click", onEdit);
  const continueBtn = document.getElementById("continueBTN");
  continueBtn.addEventListener("click", onContinue);
  const submitBtn = document.getElementById("submitBTN");
  submitBtn.addEventListener("click", onSubmit)


  function onSubmit(e){
      if (e){
        e.preventDefault();
    }
    // const allInputsAreFilled = Object.values(inputDOMSelectors)
    //     .every(x => x.value !== "");
    
    if (inputDOMSelectors.fname.value === "" || inputDOMSelectors.email.value === ""){
        return;
    }

    copyInputs();
    
    createElement("li", previewSection, `Full Name: ${inputDOMSelectors.fname.value}`);
    createElement("li", previewSection, `Email: ${inputDOMSelectors.email.value}`);
    createElement("li", previewSection, `Phone Number: ${inputDOMSelectors.phone.value}`);
    createElement("li", previewSection, `Address: ${inputDOMSelectors.address.value}`);
    createElement("li", previewSection, `Postal Code: ${inputDOMSelectors.code.value}`);
    
    submitBtn.disabled = true;
    continueBtn.disabled = false;
    editBtn.disabled = false;
    clearAllInputs();


  }

  function onEdit(e){
    if (e){
      e.preventDefault();
    }
    takeTheCopies();
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
    // Array.from(previewSection.children).forEach(x => x.remove());
    previewSection.innerHTML = "";

  }

  function onContinue(e){
    if (e){
    e.preventDefault();
  }

  // block.replaceChildren();
  // createElement("h3", block, "Thank you for your reservation!");
  block.innerHTML = `<h3>Thank you for your reservation!</h3>`
}
    

  function copyInputs(){
    for (const key in inputDOMSelectors){
      defaultInputSelectors[key] = inputDOMSelectors[key].value;
    }
  }

  function clearAllInputs(){
    Object.values(inputDOMSelectors).forEach(x => x.value = "")
  }
  function takeTheCopies(){
    for (const key in inputDOMSelectors){
      inputDOMSelectors[key].value = defaultInputSelectors[key];
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
