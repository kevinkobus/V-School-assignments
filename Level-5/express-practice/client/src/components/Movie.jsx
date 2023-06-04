import React from "react";

function Movie(props) {
  // console.log(props)
  const { title, genre, _id } = props;
  return (
    <div className="movie">
      <h1>{title}</h1>
      <p>{genre}</p>
    </div>
  );
}

export default Movie;
