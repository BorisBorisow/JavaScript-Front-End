window.addEventListener('load', solve);

function solve() {
    const inputFields = {
        'genre': document.querySelector('#genre'),
        'name': document.querySelector('#name'),
        'author': document.querySelector('#author'),
        'date': document.querySelector('#date'),
    }

    const musicApp = {
        'addButton': document.querySelector('#add-btn'),
        'collections': document.querySelector('.all-hits-container'),
        'saved': document.querySelector('.saved-container'),
        'likes': document.querySelector('.likes > p'),
    }


    const createElement = ({tag, textContent = '', value = '', className = [], attributes = {}, buttonEven = {}}) => {
        const e = document.createElement(tag)
        if (textContent) e.textContent = textContent
        if (value) e.value = value
        className.forEach(x => e.classList.add(x))
        for (const [key, value] of Object.entries(attributes)) {
            e.setAttribute(key, value)
        }
        for (const [key, value] of Object.entries(buttonEven)) {
            e.addEventListener(key, value)
        }
        return e
    }

    const checkCorrectInputs = (dataFromInput) => dataFromInput.every(item => item.value.trim().length !== 0)

    const clearInputFields = (dataFromInput => dataFromInput.forEach(x => x.value = ''))

    const removeBtns = (element) => {
        const [save, like, _] = element.querySelectorAll('button')
        save.remove()
        like.remove()
    }

    const saveBtnFunctionality = (event) => {
        const parentElement = event.currentTarget.parentElement
        musicApp.collections.removeChild(parentElement)
        removeBtns(parentElement)

        musicApp.saved.appendChild(parentElement)

    }

    const likeBtnFunctionality = (event) => {
        const button = event.currentTarget
        button.disabled = 'true'
        const [text, number] = musicApp.likes.textContent.split(': ')
        musicApp.likes.textContent = `${text}: ${Number(number) + 1}`
    }

    const deleteBtnFunctionality = (event) => {
        const parentElement = event.currentTarget.parentElement
        parentElement.remove()
    }

    const createMusicElement = (data) => {
        const div = createElement({tag: 'div', className: ['hits-info']})
        div.appendChild(createElement({tag: 'img', attributes: {src: './static/img/img.png'}}))
        div.appendChild(createElement({tag: 'h2', textContent: `Genre: ${data.genre.value}`}))
        div.appendChild(createElement({tag: 'h2', textContent: `Name: ${data.name.value}`}))
        div.appendChild(createElement({tag: 'h2', textContent: `Author: ${data.author.value}`}))
        div.appendChild(createElement({tag: 'h3', textContent: `Date: ${data.date.value}`}))
        div.appendChild(createElement({
            tag: 'button', textContent: 'Save song', className: ['save-btn'], buttonEven: {click: saveBtnFunctionality}
        }))
        div.appendChild(createElement({
            tag: 'button', textContent: 'Like song', className: ['like-btn'], buttonEven: {click: likeBtnFunctionality}
        }))
        div.appendChild(createElement({
            tag: 'button', textContent: 'Delete', className: ['delete-btn'], buttonEven: {click: deleteBtnFunctionality}
        }))

        return div
    }


    const addButtonFunctionality = (event) => {
        event.preventDefault()
        const data = Object.values(inputFields)

        if (!checkCorrectInputs(data)) return

        musicApp.collections.appendChild(createMusicElement(inputFields))
        clearInputFields(data)

    }

    musicApp.addButton.addEventListener('click', addButtonFunctionality)
}

