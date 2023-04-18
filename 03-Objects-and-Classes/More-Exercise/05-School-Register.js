function solve(data) {
    let classes = {};

    for (const line of data){
        let [name, grade, avgScore] = line.split(", ");
        name = name.split(": ")[1];
        grade = parseInt(grade.split(": ")[1]);
        avgScore = parseFloat(avgScore.split(": ")[1]);
       
        if (avgScore >= 3){
            grade += 1;
            if (!classes.hasOwnProperty(grade)){
                classes[grade] = {};
                classes[grade].students = [];
                classes[grade].score = 0;
            }
            classes[grade].students.push(name);
            classes[grade].score += avgScore;
        }
    }
    for (classLvl of Object.entries(classes)){
        console.log(`${classLvl[0]} Grade`);
        console.log(`List of students: ${classLvl[1].students.join(", ")}`)
        console.log(`Average annual score from last year: ${(classLvl[1].score / classLvl[1].students.length).toFixed(2)}\n`);
        console.log()
    }
}

solve([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
