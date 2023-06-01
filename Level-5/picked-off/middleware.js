const express = require("express");
const middleware = express.Router();

middleware.use("/", (req, res, next) => {
  console.log("middleware accessed");
  const sport = { sport: "baseball" };
  req.body = sport;
  next();
});

module.exports = middleware;
