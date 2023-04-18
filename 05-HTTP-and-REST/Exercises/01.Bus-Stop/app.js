
// function getInfo() {
//   const stopId = document.getElementById("stopId").value;
//   const BASE_URL = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

//   const stopNameEl = document.getElementById("stopName");
//   const busesEl = document.getElementById("buses");

//   fetch(BASE_URL)
//     .then((data) => data.json())
//     .then((data) => {
//       stopNameEl.textContent = "";
//       busesEl.textContent = "";
//       stopNameEl.textContent = data.name;

//       Object.entries(data.buses).forEach((b) => {
//         const newLi = document.createElement("li");
//         newLi.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
//         busesEl.appendChild(newLi);
//       });
//     })
//     .catch((err) => {
//       stopNameEl.textContent = "ERROR";
//     });
// }



async function getInfo(){
  const stopId = document.getElementById("stopId").value;
  const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  const stopName = document.getElementById("stopName");
  const buses = document.getElementById("buses");

  try {
    stopName.textContent = "Loading...";
    buses.replaceChildren();

    const res = await fetch(url);
    if (res.status != 200){
      throw new Error("Stop ID is not found!");
    }

    const data = await res.json();
    stopName.textContent = data.name
    
    Object.entries(data.buses).forEach((b) => {
      const newLi = document.createElement("li");
      newLi.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
      buses.appendChild(newLi);
      console.log(buses)
    })
  } catch (Error) {
    stopName.textContent = "Error";
  }

}