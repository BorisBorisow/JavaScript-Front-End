function search() {
  let ArrayOfElements = document.querySelectorAll("ul#towns li");
  let resultElement = document.getElementById("result");
  let searchText = document.getElementById("searchText").value;
  let matches = 0;


  for (let element of ArrayOfElements){
      element.style.fontWeight = "normal";
      element.style.textDecoration = "";
  } 
  for (let element of ArrayOfElements) {
    let text = element.textContent.toLowerCase();

    if (text.match(searchText.toLowerCase())) {
      matches++;
      element.style.fontWeight = "bold";
      element.style.textDecoration = "underline";
    }
  }
  resultElement.textContent = `${matches} matches found`
}
