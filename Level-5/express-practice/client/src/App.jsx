import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";


function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("/api/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie {...movie} key={movie.title} />
        ))}
      </div>
  );
}

export default App;
