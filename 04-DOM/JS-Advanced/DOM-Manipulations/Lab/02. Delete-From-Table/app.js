function deleteByEmail() {
  const input = document.querySelector("input[name='email']");
  const rows = Array.from(document.querySelector("tbody").children).filter(
    (r) => r.children[1].textContent == input.value
  );

  rows.forEach((r) => r.remove());
  document.getElementById("result").textContent =
    rows.length > 0 ? "Deleted." : "Not found.";
}
// function deleteByEmail() {
//     const input = document.querySelector("input[name='email']");
//     const rows = [...document.querySelector("tbody").children];
//     for (let row of rows){
//         if (row.children[1].textContent == input.value){
//             row.remove();
//             document.getElementById("result").textContent = "Deleted."
//         } else{
//             document.getElementById("result").textContent = "Not found."
//         }

//     }
// }
