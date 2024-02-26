class Movie {
    constructor(
        title ,
        studio ,
        rating = "PG"
    )
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
/* 
Write a method getPG, which takes an array of base type Movie as its argument, 
and returns a new array of only those movies in the input array with a rating of "PG".
*/
// 
    static getPG(movies)
    {
        return movies.filter(movie => movie.rating === "PG")
    }
}

const movies = [new Movie("Spectre", "Eon Productions", "PG"),
                new Movie("Batman", "WB", "PG-13"),
                new Movie("Sucide Squad", "Marvel", "PG-13"),
                new Movie("Joker", "WB", "PG")]
                
const pgRatedMovies = Movie.getPG(movies)
console.log("PG Rated Movies",pgRatedMovies);

// Printing Default values for title, studio, rating from Movie Class
console.log("Default values of Movie Class")
const newMovie = new Movie()
console.log(newMovie)

/* 
Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”
*/
console.log("New Movie Details")
const newMovie1 = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(newMovie1);