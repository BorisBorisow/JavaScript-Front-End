const button = document.getElementsByTagName("button")[0];
const result = document.getElementById("result");

result.classList.add("text", "typography");

button.addEventListener("click", toggle);



function toggle(){
    if (result.style.display === "none") {
        result.style.display = "block";
    } else {
        result.style.display = "none";
    }
}