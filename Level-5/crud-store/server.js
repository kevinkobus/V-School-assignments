const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Connect to DB
mongoose
  .connect("mongodb://localhost:27017/cruddb")
  .then(() => console.log("Connected to DB"));

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(8000, () => {
  console.log("The server is running on Port 8000");
});
