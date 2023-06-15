const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

//Middleware (runs on every request)
app.use(express.json()); // Looks for a request body, and turns it into 'req.body'
app.use(morgan("dev")); // Logs requests to the console

mongoose
  .connect("mongodb://localhost:27017/crudstoredb")
  .then(() => console.log("Connected to the Crud Store DB"));

app.use("/inventory", require("./routes/inventoryRouter.js")); // route that directs the app

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(8000, () => {
  console.log("Server is running on Port 8000");
});
