function solve(array){
  const n = array.shift();
  let collection = {}


  for (let i = 0; i < n; i++){
      let [assignee, taskId, title, status, points] = array.shift().split(":");
      
      if (!collection.hasOwnProperty(assignee)){
          collection[assignee] = [[taskId, title, status, points]];
      } else {
          collection[assignee].push([taskId, title, status, points])
      }
  }

  for (let line of array){
      let tokens = line.split(":");
      let command = tokens.shift();
      
      if (command == "Add New"){
          addNew(...tokens);
      }
      if (command == "Change Status"){
          changeStatus(...tokens);
      }
      if (command == "Remove Task"){
          removeTask(...tokens);
      }

  }

  function addNew(assignee, taskId, title, status, points){
      if (!collection.hasOwnProperty(assignee)){
          console.log(`Assignee ${assignee} does not exist on the board!`)
      } else {
          collection[assignee].push([taskId, title, status, points]);
      }
  }

  function changeStatus(assignee, taskId, newStatus){
      if (!collection.hasOwnProperty(assignee)){
          console.log(`Assignee ${assignee} does not exist on the board!`)
      } else {
          
          for (let i = 0; i < collection[assignee].length; i++) {
              if (collection[assignee][i][0] === taskId){
                  collection[assignee][i][2] = newStatus;
               
              } else {
                  console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
              }
          
         }
      }

  }
  function removeTask(assignee, index){
      index = Number(index);
      if (!collection.hasOwnProperty(assignee)){
          console.log(`Assignee ${assignee} does not exist on the board!`)
          
      } else {
          if (index < 0 || index >= collection[assignee].length){
              console.log("Index is out of range!")
           } else {
               collection[assignee].splice(index, 1)
           }
      }
  }

let tasksPoints = {
  "ToDo": 0,
  "In Progress": 0,
  "Code Review": 0,
  "Done Points": 0,
}

let doneTaskPoints = 0;
let otherTasksPoints = 0;

Object.values(collection)
  .forEach(value => {
      for (let i = 0; i< value.length; i++){
          let taskName = value[i][2];
          let currentPoints = Number(value[i][3]);
          if(tasksPoints.hasOwnProperty(taskName)){
          tasksPoints[taskName] += currentPoints;
          otherTasksPoints += currentPoints

          } else {
              tasksPoints["Done Points"] += currentPoints
              doneTaskPoints += currentPoints
          }
          
      }
  });
  Object.keys(tasksPoints)
      .forEach((key) => console.log(`${key}: ${tasksPoints[key]}pts`))
  
  if (otherTasksPoints <= doneTaskPoints){
      console.log(`Sprint was successful!`)
  } else {
      console.log(`Sprint was unsuccessful...`)
  }
}

solve(
  [
      '5',
      'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
      'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
      'Peter:BOP-1211:POC:Code Review:5',
      'Georgi:BOP-1212:Investigation Task:Done:2',
      'Mariya:BOP-1213:New Account Page:In Progress:13',
      'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
      'Change Status:Peter:BOP-1290:ToDo',
      'Remove Task:Mariya:1',
      'Remove Task:Joro:1',
  ]

)
// solve(
//   [
//       '4',
//       'Kiril:BOP-1213:Fix Typo:Done:1',
//       'Peter:BOP-1214:New Products Page:In Progress:2',
//       'Mariya:BOP-1215:Setup Routing:ToDo:8',
//       'Georgi:BOP-1216:Add Business Card:Code Review:3',
//       'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
//       'Change Status:Georgi:BOP-1216:Done',
//       'Change Status:Will:BOP-1212:In Progress',
//       'Remove Task:Georgi:3',
//       'Change Status:Mariya:BOP-1215:Done',
//   ]

// )

