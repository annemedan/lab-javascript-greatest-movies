// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(Arr) {
  const directors = Arr.map(person => person.director)
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(count) {
  const stevenMovies = count.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'));
  return stevenMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(Arr) {
  if (!Arr.length){
    return 0
  }

  let scores = Arr.map(grades => grades.score)
  
  let totalScore = scores.reduce(function(previousValue, currentValue) {
      if (typeof currentValue !== "number"){
      currentValue = 0; 
      }
      return previousValue + currentValue;
  });

  return Number((totalScore / scores.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(Arr) {
  if (!Arr.length){
    return 0
  }  

  let dramaMovies = Arr.filter(movie => movie.genre.includes("Drama"));
  if (!dramaMovies.length) {
    return 0
  }

  let scores = dramaMovies.map(movie => movie.score)
 
  let totalScore = scores.reduce(function(previousValue, currentValue) {
      if (typeof currentValue !== "number"){
      currentValue = 0; 
      }
      return previousValue + currentValue;
  });

  return Number((totalScore / dramaMovies.length).toFixed(2))
}


//This one has an error = should return 0 if there is no Drama movie

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(Arr) {
let yearOrder = [];
yearOrder = Arr.slice().sort(function (movie1, movie2) {
  if (movie1.year > movie2.year) {
    return 1
  } else if (movie1.year === movie2.year) {
    if (movie1.title > movie2.title) {
      return 1
    } else {
      return -1
    }
  } else {
    return -1
  }
})
return yearOrder
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(Arr) {

  let titlesList = Arr.map(grades => grades.title)
  let titleOrder = [];
  titleOrder = titlesList.slice().sort((movie1, movie2) => {
    if (movie1.title > movie2.title) {
      return 1
    } else {
      return -1
    }
    
  })
  if (titleOrder.length > 20){
    titleOrder.splice(titleOrder.length - 20);
  }
  
  return titleOrder
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
