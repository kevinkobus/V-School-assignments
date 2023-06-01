const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

// app.use(express.json());

app.use("/item", require("./middleware.js"));

const item = { _id: uuidv4(), name: "glove" };

app.get("/item", (req, res) => {
  console.log("Get request received");
  const updatedItem = Object.assign(item, req.body);
  res.send(updatedItem);
});

app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
