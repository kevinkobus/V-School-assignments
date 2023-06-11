const express = require("express");
const movieRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

// Data
const movies = [
  { title: "die hard", genre: "action", _id: uuidv4() },
  { title: "start wars IV", genre: "fantasy", _id: uuidv4() },
  { title: "lion king", genre: "fantasy", _id: uuidv4() },
  { title: "friday the 13th", genre: "horror", _id: uuidv4() },
];

// Routes - multiple ways to do this

// Option 1
// Get All
movieRouter.get("/", (req, res) => {
  res.status(200)
  res.send(movies);
});

// Get One
movieRouter.get("/:movieId", (req, res, next) => {
  const movieId = req.params.movieId;
  const foundMovie = movies.find((movie) => movie._id === movieId);
  if(!foundMovie){
    const error = new Error(`The item with id ${movieId} was not found.`)
    res.status(500)
    return next(error)
  }
  res.status(200).send(foundMovie);
});

// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
  const genre = req.query.genre;
  if(!genre){
    const error = new Error("You must provide a genre")
    res.status(500)
    return next(error)
  }
  const filteredMovies = movies.filter((movie) => movie.genre === genre);
  res.status(200).send(filteredMovies);
});

// Post One
movieRouter.post("/", (req, res) => {
  const newMovie = req.body;
  newMovie._id = uuidv4();
  movies.push(newMovie);
  // res.send(`Successfully added ${newMovie.title} to the database!`);
  res.status(201).send(newMovie)
});

// Delete One
movieRouter.delete("/movies/:movieId", (req, res) => {
  const movieId = req.params.moviedId
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  movies.splice(movieIndex, 1)
  res.send("Successfully deleted movie!")
})

// Update One
movieRouter.put("/movies/:movieId", (req, res) => {
  movieId = req.params.movieId
  const updateObject = req.body
  const movieIndex = movies.findIndex(movie => movie._id === movieId)
  const updatedMovie = Object.assign(movies[movieIndex], updateObject)
  res.status(201).send(updatedMovie)
})


// Option 2
// movieRouter
//   .route("/api")
//   .get((req, res) => {
//     res.send(movies);
//   })
//   .post((req, res) => {
//     const newMovie = req.body;
//     newMovie._id = uuidv4();
//     movies.push(newMovie);
//     res.send(`Successfully added ${newMovie.title} to the database!`);
//   });



// app.use("/api/chores", require("./routes/choresRouter.js"))


module.exports = movieRouter;
