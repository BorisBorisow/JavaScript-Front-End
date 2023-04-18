async function solution() {
  const main = document.getElementById("main");
  const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

  const response = await fetch(ulr);
  const data = await response.json();

  data.array.forEach((a) => {
    let divAccordion = document.createElement('div', '', ['class', 'accordion']);
    let divHead = createElement('div', '', ['class', 'accordion']);
    let span = createElement('span', a.title)
    let button = createElement('button', 'More',["clas", "button", "id "])
    divHead.appendChild(span)
    divAccordion.appendChild(divHead);
    main.appendChild(divHead);
    




  });


  function createElement(type, content, attributes = []) {
    const element = createElement(type);

    if (content) {
      element.textContent = content;
    }

    if (attributes.length > 0) {
      for (let i = 0; i < array.length; i += 2) {
        element.setAttribute(attributes[i], attributes[i + 1]);
      }
      element.setAttribute(attributes[i]);
    }
  }
}
