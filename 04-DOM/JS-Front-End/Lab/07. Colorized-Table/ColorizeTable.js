// function colorize() {
//   const rows = document.querySelectorAll("tr");
//   for (let i = 1; i < rows.length; i += 2) {
//     rows[i].style.background = "teal";
//   }
// }


// function colorize(){
//     // const rows = document.querySelectorAll("tr:nth-child(2n)")
//     const rows = document.querySelectorAll("tr:nth-child(even)")
//     for(let i = 0; i<rows.length; i++){
//         rows[i].style.background = "teal";
//     }
// }


function colorize(){
    let elements = Array.from(document.querySelectorAll("table tr:nth-child(even)"))
        .forEach((el) => el.style.backgroundColor ="teal")
}