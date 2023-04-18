// function solve() {
//     const info = document.querySelector("#info > span");
//     const departBtn = document.querySelector("#depart");
//     const arriveBtn = document.querySelector("#arrive");

    

//     stop = {
//         next: "depot"
//     };


    
//     async function depart() {
//         departBtn.disabled = true;
//         const BASE_URL = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
//         const res = await fetch(BASE_URL);
//         if (!res.ok) {
//             info.textContent = "Error";
//             departBtn.disabled = true;
//             arriveBtn.disabled = true;
//             alert("Wrong data!")
//         };
//         stop = await res.json();

//         info.textContent = `Next stop ${stop.name}`

//         arriveBtn.disabled = false
//     }

//     async function arrive() {
//         info.textContent = `Arriving at ${stop.name}`
//         departBtn.disabled = false;
//         arriveBtn.disabled = true;

//     }

//     return {
//         depart,
//         arrive
//     };
// }

// let result = solve();

function solve() {
    const info = document.querySelector("#info > span");
    const departBtn = document.querySelector("#depart");
    const arriveBtn = document.querySelector("#arrive");
    
    let stop = {
        next: "depot"
    };

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const res = await fetch(url);
        
        if(!res.ok) {
            info.textContent = "Error";
            
            arriveBtn.disabled = true;
            departBtn.disabled = true;
            
            alert("Wrong data!")
        }

        stop = await res.json();
        info.textContent = `Next stop ${stop.name}`;
        departBtn.disabled = true;
        arriveBtn.disabled = false;

    };

    async function arrive() {
       info.textContent = `Arriving at ${stop.name}`;
       arriveBtn.disabled = true;
       departBtn.disabled = false;

    };

    return {
        depart,
        arrive
    };


}
let result = solve();