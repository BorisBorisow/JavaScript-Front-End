// function solve(names){
//     let namesArray = [];
//     for (const name of names) {
//         namesArray.push(`Name: ${name} -- Personal Number: ${name.length}`);
//     }
//     console.log(namesArray.join('\n'));
// }



// solution 2---------------------------
// function solve(names){
//     let employees = {};
//     for (const name of names) {
//         employees[name] = name.length;
//     }
//         for (const key in employees) {
//         console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
//     }
   

// }


// solve([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ]
// )

// 3th solution

function parseEmployees(input) {    
    let employees = input.reduce((data, employee) => {
        data[employee] = employee.length;
        return data;
    }, {});


    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
            
        }
    }
    
    parseEmployees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)