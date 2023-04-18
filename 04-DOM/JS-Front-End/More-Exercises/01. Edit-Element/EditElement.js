function editElement(element, toReplace, replacer) {
    let data = element.textContent;

    while (data.includes(toReplace)){
        data = data.replace(toReplace, replacer);
    }

    element.textContent = data;
    
}