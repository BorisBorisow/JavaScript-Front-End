function solve(){
   const creator = document.getElementById("creator");
   const title = document.getElementById("title");
   const category = document.getElementById("category");
   const content = document.getElementById("content");

   const siteContentSection = document.querySelector(".site-content > main > section");
   const createBtn = document.querySelector("body > div > div > aside > section:nth-child(1) > form > button");
   const archiveOl = document.querySelector(".archive-section > ol")

   createBtn.addEventListener("click", onCreate)

   let titlesToArchive = [];

   function onCreate(e){
      if (e) {

         e.preventDefault();
         
      }
      let creatorEl = creator.value;
      let titleEl = title.value;
      let categoryEl = category.value;
      let contentEl = content.value;


      
      if (creatorEl == "" || titleEl == "" || categoryEl == "" || contentEl == ""){
        

         return;
      }


      const article= createElement("article", siteContentSection);
      const titleHeader = createElement("h1", article, titleEl);
      const p = createElement("p", article, `Category:`)
      createElement("strong", p, categoryEl)
      const p2 = createElement("p", article, "Creator:");
      createElement("strong", p2, creatorEl)
      createElement("p", article, contentEl)
      const div = createElement("div", article, "", "buttons");
      const deleteBtn = createElement("button", div, "Delete", "btn delete");
      deleteBtn.addEventListener("click", onDelete);
      const archiveBtn = createElement("button", div, "Archive", "btn archive");
      archiveBtn.addEventListener("click", onArchive);

      document.querySelector("form").reset()

      function onDelete(){
         article.remove()
      }

      function onArchive(){
         titlesToArchive.push(titleEl)
         titlesToArchive.sort((a,b) => a.localeCompare(b))
         archiveOl.innerHTML = "";
         titlesToArchive.forEach(x => createElement("li", archiveOl, x))
         article.remove()
         
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
