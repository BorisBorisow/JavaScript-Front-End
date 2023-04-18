// function moviesParser(list) {
//   let movies = {};

//   for (item of list) {
//     if (item.includes("addMovie")) {
//       let name = item.split("addMovie ")[1];
//       movies[name] = {};
//       movies[name].name = name;
//     } else if (item.includes("directedBy")) {
//       let [nameMovie, nameDirector] = item.split(" directedBy ");
//       if (nameMovie in movies) {
//         movies[nameMovie].director = nameDirector;
//       }
//     } else if (item.includes("onDate")) {
//       let [nameMovie, date] = item.split(" onDate ");
//       if (nameMovie in movies) {
//         movies[nameMovie].date = date;
//       }
//     }
//   }
//   let result = [];
//   for (let [key, value] of Object.entries(movies)) {
//     if (Object.keys(movies[key]).length !== 3) {
//       delete movies[key];
//     } else {
//       result.push(value);
//       console.log(JSON.stringify(value));
//     }
//   }
// }

function moviesParser(input) {
  let movies = {};

  for (const line of input) {
    if (line.includes("addMovie")) {
      let movieName = line.split("addMovie ")[1];
      movies[movieName] = {};
      movies[movieName].name = movieName;
    } else if (line.includes("directedBy")) {
      let [movieName, directorName] = line.split(" directedBy ");
      if (movieName in movies) {
        movies[movieName].director = directorName;
      }
    } else if (line.includes("onDate")) {
      let [movieName, date] = line.split(" onDate ");
      if (movieName in movies) {
        movies[movieName].date = date;
      }
    }
  }
  let result = [];
    for (let [key, value] of Object.entries(movies)) {
      if (Object.keys(movies[key]).length !== 3) {
        delete movies[key];
      } else {
        result.push(value);
        console.log(JSON.stringify(value));
      }
    }
  }

moviesParser([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
