import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import AddMovieForm from "./components/AddMovieForm"

function App() {
  const [movies, setMovies] = useState([]);

  function getMovies() {
    axios
      .get("/api/movies")
      // .then((res) => console.log(res.data))
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }

function addMovie(newMovie) {
  axios.post("/api/movies", newMovie)
  // .then(res => console.log(res))
  .then(res => {
    setMovies(prevMovies => [...prevMovies, res.data])
  })
  .catch(err => console.log(err))
}

function deleteMovie(movieId) {
  axios.delete(`/api/movies/${movieId}`)
  // .then(res => console.log(res))
  .then(res => {
    setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
  })
  .catch(err => console.log(err))
}

  useEffect(() => {
    getMovies()
  }, []);
   
  return (
    <div className="movie-container">
      <AddMovieForm 
        addMovie={addMovie}
        
      />
      {movies.map((movie) => (
        <Movie 
        {...movie} 
        key={movie.title}
        deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
}

export default App;
