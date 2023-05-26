const express = require("express");
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

// Data
const tvShows = [
  { title: "Rick and Morty", _id: uuidv4() },
  { title: "Watchmen", _id: uuidv4() },
  { title: "Westworld", _id: uuidv4() },
  { title: "Friends", _id: uuidv4() },
];

// Routes
// Get All
tvShowRouter.get("/", (req, res) => {
  res.send(tvShows);
});

// Get One
tvShowRouter.get("/:tvShowId", (req, res) => {
  const tvShowId = req.params.tvShowId
  const foundTv = tvShows.find(tvShow => tvShow._id === tvShowId)
  res.send(foundTv)
})


// tvShowRouter.post("/", (req, res) => {
//   const newShow = req.body;
//   newShow._id = uuidv4();
//   tvShows.push(newShow);
//   res.send(`Succesfully added ${newShow.title} to the database`);
// });

// tvShowRouter
//   .route("/")
//   .get((req, res) => {
//     res.send(tvShows);
//   })
//   .post((req, res) => {
//     const newShow = req.body;
//     newShow._id = uuidv4();
//     tvShows.push(newShow);
//     res.send(`Succesfully added ${newShow.title} to the database`);
//   });


module.exports = tvShowRouter;