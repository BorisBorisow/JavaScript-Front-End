function toggle(){

 const text = document.getElementById("extra");
 const button = document.getElementsByClassName("button")[0];

 if(button.textContent == "More"){
    button.textContent = "Less";
    text.style.display = "block"
 } else {
    button.textContent = "More";
    text.style.display = "none"
 }
}