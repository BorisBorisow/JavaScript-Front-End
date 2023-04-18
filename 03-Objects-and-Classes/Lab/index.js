let people = { 
    'Kiril': { age: 25, email: `kiril@abv.bg`},
    'Boris': { age: 24, email: `boris@abv.bg`},
    'Georgi': { age: 23, email: `georgi@abv.bg`}
}

// sorting by email --------------------

let entries = Object.entries(people);
let sortedByName = entries.sort(([personA, personB]) =>{
    let personAEmail = personA[1].email;
    let personBEmail = personB[1].email;
    return personAEmail.localeCompare(personBEmail);
})

for (const [name, info] of sortedByName){
    console.log(name);
    console.log(info);
}