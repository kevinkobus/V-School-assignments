const express = require("express");
const movieRouter = express.Router();
const Movie = require("../models/movie.js");

// Get All
movieRouter.get("/", (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      return res.status(200).send(movies);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Post One
movieRouter.post("/", (req, res, next) => {
  const newMovie = new Movie(req.body);
  newMovie
    .save()
    .then((savedMovie) => {
      return res.status(201).send(savedMovie);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Delete One
movieRouter.delete("/:movieId", (req, res, next) => {
  Movie.findOneAndDelete({ _id: req.params.movieId })
    .then((deletedMovie) => {
      if (!deletedMovie) {
        return res.status(404).send("Item not found");
      }
      return res
        .status(200)
        .send(
          `Successfully deleted item ${deletedMovie.title} from the database `
        );
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Update One
movieRouter.put("/:movieId", (req, res, next) => {
  Movie.findOneAndUpdate(
    {_id: req.params.movieId}, // find this one to update
    req.body, // update the object with this data
    { new: true }) // send back the updated version 
    .then((updatedMovie) => {
      if(!updatedMovie){
        return res.status(404).send("Item not found");
      }
      return res.status(200).send(updatedMovie);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});


// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
  Movie.find({ genre: req.query.genre})
  .then((movies) => {
    return res.status(200).send(movies);
  })
  .catch((err) => {
    res.status(500);
    return next(err);
  });
});

module.exports = movieRouter;
