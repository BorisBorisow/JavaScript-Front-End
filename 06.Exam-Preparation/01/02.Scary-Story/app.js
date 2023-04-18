window.addEventListener("load", solve);

function solve() {

  const lastInputs = {
    firstName: null,
    lastName: null,
    age: null,
    title: null,
    genre: null,
    story: null,
  }

  const allInputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    title: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story'),  
  };

  const publishBtn = document.getElementById("form-btn");
  const previewDirectory = document.getElementById("preview-list");
  const mainContainer = document.getElementById("main");
  publishBtn.addEventListener("click", publishStory);

  function publishStory() {
    const everyKeyHatValue = Object.values(allInputs)
      .every((el) => el.value !== "");

    if (!everyKeyHatValue) {
      return;
    }

    const { firstName, lastName, age, title, genre, story} = allInputs;
    const li = document.createElement("li");
    li.classList.add("story-info");

    const article = document.createElement("article");

    const h4 = document.createElement("h4");
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
    article.appendChild(h4);

    const pAge = document.createElement("p");
    pAge.textContent = `Age: ${age.value}`;
    article.appendChild(pAge);

    const pTitle = document.createElement("p");
    pTitle.textContent = `Title: ${title.value}`;
    article.appendChild(pTitle);

    const pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${genre.value}`;
    article.appendChild(pGenre);

    const pStory = document.createElement("p");
    pStory.textContent = `${story.value}`;
    article.appendChild(pStory);

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save Story";
    article.appendChild(saveBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Story";
    article.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete Story";
    article.appendChild(deleteBtn);

    li.appendChild(article);
    previewDirectory.appendChild(li);
    
    editBtn.addEventListener("click", editStory);
    saveBtn.addEventListener("click", saveStory);
    deleteBtn.addEventListener("click", deleteStory);

    for (const key in allInputs){
      lastInputs[key] = allInputs[key].value;
    }
    
    clearInputs();
    publishBtn.setAttribute("disabled", true);
    
  }
  function editStory() {

    for (const key in allInputs){
      allInputs[key].value = lastInputs[key];
    }
    
    publishBtn.removeAttribute("disabled");
    previewDirectory.innerHTML = "";
    const h3 = document.createElement("h3");
    h3.textContent = "Preview";
    previewDirectory.appendChild(h3)
   


  }

  function saveStory(){
    mainContainer.replaceChildren();
    const h1 = document.createElement("h1");
    h1.innerHTML = "Your scary story is saved!";
    mainContainer.appendChild(h1);

  }

  function deleteStory() {
    previewDirectory.replaceChildren();
    const h3 = document.createElement("h3");
    h3.textContent = "Preview";
    previewDirectory.appendChild(h3)
    publishBtn.disabled = false;
  }

  function clearInputs() {
    Object.values(allInputs)
      .forEach(input => {
        input.value = "";
      })
  }
}
