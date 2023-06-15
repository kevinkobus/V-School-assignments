// First Express Server
const express = require("express");
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware (for every request)
// Looks for a request body, and turns it into 'req.body'
// .use takes two arguments, first is what to look for (mount path), second is what middleware should be used
// if first argument is left blank, it just runs on every request
app.use(express.json());
app.use(morgan("dev"))

// Connect to DB
mongoose.connect("mongodb://localhost:27017/moviesdb")
  .then(() => console.log("Connected to DB"))

app.use("/api/movies", require("./routes/movieRouter.js"));
// app.use("/api/tvShows", require("./routes/tvShowRouter.js"));

// Error handler
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})


app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});