window.addEventListener("load", solve);

function solve() {

  let profit = 0;

  const defaultInputs = {
    make: null,
    model:null,
    year:null,
    fuel:null,
    originalCost: null,
    sellingPrice: null,
  }
  const inputDOMSelectors = {
    make: document.getElementById("make"),
    model:document.getElementById("model"),
    year:document.getElementById("year"),
    fuel:document.getElementById("fuel"),
    originalCost: document.getElementById("original-cost"),
    sellingPrice:document.getElementById("selling-price"),
  }

  const publishBtn = document.querySelector("#publish");
  const tableBody = document.getElementById("table-body");
  const carList = document.getElementById("cars-list");
  const profitSection = document.getElementById("profit");
  
  publishBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const allInputsAreFilled = Object.values(inputDOMSelectors)
      .every((el) => el.value !== "")
    
    let priceDifference = Number(inputDOMSelectors.sellingPrice.value) - Number(inputDOMSelectors.originalCost.value);

    if((!allInputsAreFilled) || (priceDifference <= 0)){
      return;
  
    }

    
    const { make, model, year, fuel, originalCost, sellingPrice } = inputDOMSelectors;
    const tr = createElement("tr", tableBody, "", "row");
    createElement("td", tr, make.value);
    createElement("td", tr, model.value);
    createElement("td", tr, year.value);
    createElement("td", tr, fuel.value);
    createElement("td", tr, originalCost.value);
    createElement("td", tr, sellingPrice.value);
    const btnTd = createElement("td", tr);
    const editBtn = createElement("button", btnTd, "Edit", "action-btn edit")
    const sellBtn = createElement("button", btnTd, "Sell", "action-btn sell")
    

    editBtn.addEventListener("click", onEdit);
    sellBtn.addEventListener("click", onSell);


    for (const key in inputDOMSelectors){
      defaultInputs[key] = inputDOMSelectors[key].value;
    }

    Object.values(inputDOMSelectors).forEach((x) => x.value = "")
  });

  function onEdit(e){
    for (const key in inputDOMSelectors){
      inputDOMSelectors[key].value = defaultInputs[key];
    }
    
    const currentEl = e.currentTarget;
    const parentTr = currentEl.parentNode.parentNode;
    parentTr.remove()
  }

  function onSell(e){
    const currentEl = e.currentTarget;
    const parentEl = currentEl.parentNode.parentNode;
    let children = Array.from(parentEl.children)
    let make = children[0].textContent;
    let model = children[1].textContent;
    let year = children[2].textContent;
    let sellPrice = children[5].textContent 
    let originalPrice = children[4].textContent
    let difference = (Number(sellPrice) - Number(originalPrice))
    

    const li = createElement("li", carList, "", "each-list");
    createElement("span", li, `${make} ${model}`);
    createElement("span", li, `${year}`);
    createElement("span", li, `${difference}`);

    profit += difference;
    profitSection.textContent = profit.toFixed(2);
    console.log(parentEl)
    parentEl.remove()
    inputDOMSelectors.year.value = "2017";
    inputDOMSelectors.fuel.value = "petrol";

  }


  function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml ){
    const htmlElement = document.createElement(type);

    if (useInnerHtml){
      htmlElement.innerHTML = content;
    } else {
      if (content && type === "input") {
        htmlElement.value = content;
      }
      if (content && type !== "input"){
        htmlElement.textContent = content;
      }
    }

    if (classes){
     htmlElement.className = classes;
    }

    if (id) {
      htmlElement.id = id;
    }

    if(attributes){
      for (const key in attributes){
        htmlElement.setAttribute(key, attributes[key])
      }
    }

    if (parentNode){
      parentNode.appendChild(htmlElement);
    }
    return htmlElement;
  }
}
