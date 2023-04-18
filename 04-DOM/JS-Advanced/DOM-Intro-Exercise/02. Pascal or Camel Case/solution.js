function solve() { 

  function changeName(text, nameConvention){
    let words = text.split(/(\s+)/).filter((x) => x != " ");
    // let words = text.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].toLowerCase();
  
      if (i != 0 || nameConvention == "Pascal Case") {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
      }
    }
    result = words.join("")
    document.getElementById("result").textContent = result;
  }
  
  let input = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  
  if (convention != "Camel Case" && convention != "Pascal Case") {
    return (document.getElementById("result").textContent = "Error!");
  } else{
    return changeName(input, convention)
  }


}


// ---------------------second solution--------------------------------

// function solve() {
//   let input = document.getElementById("text").value;
//   const nameConvention = document.getElementById("naming-convention").value;
//   let toGet = document.getElementById("result").textContent

//   let result = "";
//   let words = input.split(/(\s+)/).filter(x => x != " ");
  
  
//   if (nameConvention == "Camel Case"){
    
//     for (let i = 0; i < words.length; i++){
//       words[i] = words[i].toLowerCase()
     
//       if (i !== 0){
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)
//       }

//   } 
//   } else if (nameConvention == "Pascal Case"){
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].toLowerCase();
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)

//     }

//   } else {
//     return document.getElementById("result").textContent = "Error!";
//   }
//   result = words.join("")
//   document.getElementById("result").textContent = result;
// }   


