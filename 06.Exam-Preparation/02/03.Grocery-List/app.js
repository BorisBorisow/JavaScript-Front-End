function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const inputDOMSelectors = {
      product: document.getElementById('product'),
      count: document.getElementById('count'),
      price: document.getElementById('price'),
    }
    const otherDOMSelectors = {
      addBtn: document.getElementById('add-product'),
      updateBtn: document.getElementById('update-product'),
      loadBtn: document.getElementById('load-product'),
      productsContainer: document.getElementById('tbody'),
      form: document.querySelector('.list'),
    }
    let currentProducts = [];
    let productToEdit = {};
  
    otherDOMSelectors.loadBtn.addEventListener('click', loadAllProductsHandler);
    otherDOMSelectors.updateBtn.addEventListener('click', updateProductHandler);
    otherDOMSelectors.addBtn.addEventListener('click', addProductHandler);
  
    function loadAllProductsHandler(event) {
      if (event) {
        event.preventDefault();
      }
  
      otherDOMSelectors.productsContainer.innerHTML = '';
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((allProductsRes) => {
          currentProducts = Object.values(allProductsRes);
          for (const { product, count, price, _id } of currentProducts) {
            const tableRow = createElement('tr', otherDOMSelectors.productsContainer);
            tableRow.id = _id;
            createElement('td', tableRow, product, ['name']);
            createElement('td', tableRow, count, ['count']);
            createElement('td', tableRow, price, ['product-price']);
            const buttonsTd = createElement('td', tableRow, null, ['btn']);
            const updateBtn = createElement('button', buttonsTd, 'Update', ['update']);
            const deleteBtn = createElement('button', buttonsTd, 'Delete', ['delete']);
            updateBtn.addEventListener('click', loadUpdateFormHandler);
            deleteBtn.addEventListener('click', deleteProductHandler);
          }
        })
    }
  
    function loadUpdateFormHandler() {
      const id = this.parentNode.parentNode.id;
      productToEdit = currentProducts.find((p) => p._id === id);
      for (const key in inputDOMSelectors) {
        inputDOMSelectors[key].value = productToEdit[key];
      }
      otherDOMSelectors.addBtn.setAttribute('disabled', true);
      otherDOMSelectors.updateBtn.removeAttribute('disabled');
    }
  
    function updateProductHandler(event) {
      event.preventDefault();
      const { product, count, price } = inputDOMSelectors;
      const payload = JSON.stringify({
        product: product.value,
        count: count.value,
        price: price.value
      });
      const httpHeaders = {
        method: 'PATCH',
        body: payload
      }
  
      fetch(`${BASE_URL}${productToEdit._id}`, httpHeaders)
        .then(() => {
          loadAllProductsHandler();
          otherDOMSelectors.addBtn.removeAttribute('disabled');
          otherDOMSelectors.updateBtn.setAttribute('disabled', true);
          otherDOMSelectors.form.reset();
        })
        .catch((err) => {
          console.error(err);
        })
    }
  
    function addProductHandler(event) {
      event.preventDefault();
      const { product, count, price } = inputDOMSelectors;
      const payload = JSON.stringify({
        product: product.value,
        count: count.value,
        price: price.value
      });
      const httpHeaders = {
        method: 'POST',
        body: payload
      };
  
      fetch(BASE_URL, httpHeaders)
        .then(() => {
          loadAllProductsHandler();
          otherDOMSelectors.form.reset();
        })
        .catch((err) => {
          console.error(err);
        })
    }
  
    function deleteProductHandler() {
      const id = this.parentNode.parentNode.id;
      const httpHeaders = {
        method: 'DELETE'
      };
  
      fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadAllProductsHandler())
        .catch((err) => {
          console.error(err);
        })
    }
  
    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
      const htmlElement = document.createElement(type);
    
      if (content && useInnerHtml) {
        htmlElement.innerHTML = content;
      } else {
        if (content && type !== 'input') {
          htmlElement.textContent = content;
        }
    
        if (content && type === 'input') {
          htmlElement.value = content;
        }
      }
    
      if (classes && classes.length > 0) {
        htmlElement.classList.add(...classes);
      }
    
      if (id) {
        htmlElement.id = id;
      }
    
      // { src: 'link', href: 'http' }
      if (attributes) {
        for (const key in attributes) {
          htmlElement.setAttribute(key, attributes[key])
        }
      }
    
      if (parentNode) {
        parentNode.appendChild(htmlElement);
      }
    
      return htmlElement;
    }
  }
  
  attachEvents();


//   async function attachEvents() {
//     const API_URL = 'http://localhost:3030/jsonstore/grocery/'
//     const product = document.querySelector('#product')
//     const count = document.querySelector('#count')
//     const price = document.querySelector('#price')

//     const addProduct = document.querySelector('#add-product')
//     const updateProduct = document.querySelector('#update-product')
//     const loadProduct = document.querySelector('#load-product')

//     const tbody = document.querySelector('#tbody')
//     let updateBtnId = null


//     const createElement = (tag, textContent, value, className, attributes) => {
//         const e = document.createElement(tag)

//         if (textContent) {
//             e.textContent = textContent
//         }

//         if (value) {
//             e.value = value
//         }

//         if (className) {
//             className.forEach(x => e.classList.add(x))
//         }

//         if (attributes) {
//             for (const key in attributes) {
//                 e.setAttribute(key, attributes[key])
//             }
//         }
//         return e
//     }

//     const resetInput = (data) => {
//         data.forEach(x => x.value = '')
//     }

//     const loadDataFromApi = async () => {
//         const data = await fetch(API_URL)
//         return await data.json()
//     }

//     const updateBtnFunctionality = () => {
//         const e = event.target
//         updateBtnId = e.id

//         product.value = e.parentElement.parentElement.querySelector('.name').textContent
//         count.value = e.parentElement.parentElement.querySelector('.count-product').textContent
//         price.value = e.parentElement.parentElement.querySelector('.product-price').textContent

//         addProduct.disabled = true
//         updateProduct.disabled = false
//     }

//     const deleteBtnFunctionality = async () => {
//         const e = event.target

//         await fetch(`${API_URL}${e.id}`, {
//             method: 'DELETE'
//         })
//         await loadDataToHTML(await loadDataFromApi())
//     }

//     const createTaskElement = (data) => {
//         const tr = createElement('tr')

//         tr.appendChild(createElement('td', data.product, '', ['name']))
//         tr.appendChild(createElement('td', data.count, '', ['count-product']))
//         tr.appendChild(createElement('td', data.price, '', ['product-price']))

//         const td = createElement('td', '', '', ['btn'])

//         const updateBtn = createElement('button', 'Update', '', ['update'], {id: data._id})
//         updateBtn.addEventListener('click', updateBtnFunctionality)

//         const deleteBtn = createElement('button', 'Delete', '', ['delete'], {id: data._id})
//         deleteBtn.addEventListener('click', deleteBtnFunctionality)

//         td.appendChild(updateBtn)
//         td.appendChild(deleteBtn)

//         tr.appendChild(td)

//         return tr

//     }

//     const loadDataToHTML = async (data) => {
//         tbody.innerHTML = ''

//         for (const key in data) {
//             tbody.appendChild(await createTaskElement(data[key]))
//         }

//     }

//     const loadProductFunctionality = async () => {
//         event.preventDefault()
//         await loadDataToHTML(await loadDataFromApi())
//     }

//     const createItemForAPiDb = (product, count, price) => {
//         return {
//             product, count, price
//         }
//     }

//     const addProductFunctionality = async () => {
//         event.preventDefault()

//         await fetch(API_URL, {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(createItemForAPiDb(product.value, count.value, price.value))
//         })
//         await loadDataToHTML(await loadDataFromApi())
//         resetInput([product, count, price])
//     }

//     const updateProductFunctionality = async () => {

//         await fetch(`${API_URL}${updateBtnId}`, {
//             method: 'PATCH',
//             header: {'Content-Type': 'application/json'},
//             body: JSON.stringify(createItemForAPiDb(product.value, count.value, price.value))
//         })
//         await loadDataToHTML(await loadDataFromApi())
//         resetInput([product, count, price])

//         addProduct.disabled = false
//         updateProduct.disabled = true
//     }


//     loadProduct.addEventListener('click', loadProductFunctionality)
//     addProduct.addEventListener('click', addProductFunctionality)
//     updateProduct.addEventListener('click', updateProductFunctionality)

// }

// attachEvents()