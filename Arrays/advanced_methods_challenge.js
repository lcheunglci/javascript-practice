//Map, Filter, Reduce, and FlatMap
const movies = [
  {
    title: 'Avatar',
    year: '2009',
    rating: 'PG-13',
  },
  {
    title: 'I Am Legend',
    year: '2007',
    rating: 'PG-13',
  },
  {
    title: '300',
    year: '2006',
    rating: 'R',
  },
  {
    title: 'The Avengers',
    year: '2012',
    rating: 'PG-13',
  },
  {
    title: 'The Wolf of Wall Street',
    year: '2013',
    rating: 'R',
  },
];
  
//Challenge Question #1
//Create a new array that just contains the movie titles.
const movieTitles = movies.map((movie) => movie.title);
console.log('Movie Titles:', movieTitles);

//Challenge Question #2
//Create a new array that contains only those movies that are PG-13.
const pg13Movies = movies.filter((movie) => movie.rating === 'PG-13');
console.log('PG-13 Movies:', pg13Movies);

//Challenge Question #3
//Determine how many of the movies are rating R.
const numberOfRRatingMovies = movies.reduce((total, movie) => {
  if (movie.rating === 'R') {
      total++;
    }
    return total;
  }, 0);
console.log('Number of R rated movies:', numberOfRRatingMovies);