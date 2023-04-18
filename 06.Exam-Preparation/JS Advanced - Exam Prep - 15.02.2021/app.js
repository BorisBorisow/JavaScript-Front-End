function solution() {
    const currentGift = document.querySelector("body > div > section:nth-child(1) > div > input[type=text]");
    const addGiftBtn = document.querySelector("body > div > section:nth-child(1) > div > button");
    addGiftBtn.addEventListener("click", onAdd);
    const listOfGifts = document.querySelector("body > div > section:nth-child(2) > ul");
    const sentGifts = document.querySelector("body > div > section:nth-child(3) > ul");
    const discardedGifts = document.querySelector("body > div > section:nth-child(4) > ul");

    let allGifts = [];
    function onAdd(e){
        if (e){
            e.preventDefault();
        }
        if (!currentGift.value){
            return;
        }

        listOfGifts.innerHTML = "";
        allGifts.push(currentGift.value);
        allGifts.sort((a, b) => a.localeCompare(b));
        allGifts.forEach(element => {
            const li = createElement("li", listOfGifts, element, "gift");
            const sendBtn = createElement("button", li, "Send", "sendButton");
            sendBtn.addEventListener("click", onSend);
            const discardBtn = createElement("button", li, "Discard", "discardButton");
            discardBtn.addEventListener("click", onDiscard);

        })

        currentGift.value = "";

        function onSend(){
            let list = this.parentNode;
            removeButtons(list);
            sentGifts.appendChild(list);
            removeGift(list.textContent);
            
        }
        function onDiscard(){
            let list = this.parentNode;
            removeButtons(list);
            discardedGifts.appendChild(list);
            removeGift(list.textContent);
        }

        function removeButtons(list) {
            Array.from(list.querySelectorAll('button')).forEach((button) => button.remove());
        }
    
        function removeGift(gift) {
            let giftIndex = allGifts.indexOf(gift);
            allGifts.splice(giftIndex, 1);
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