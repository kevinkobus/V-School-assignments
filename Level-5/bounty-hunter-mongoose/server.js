const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

//Middleware (runs on every request)
app.use(express.json()); // Looks for a request body, and turns it into 'req.body'
app.use(morgan("dev")); // Logs requests to the console

// Connecting to MongoDB w/Mongoose
mongoose
  .connect("mongodb://localhost:27017/bountyhunterdb")
  .then(() => console.log("Connected to the Bounty Hunter DB"));

app.use("/api", require("./routes/bountiesRouter.js")); // route that directs the app

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
