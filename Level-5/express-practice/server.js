// First Express Server
const express = require("express");
const app = express();
const morgan = require("morgan")

// Middleware (for every request)
// Looks for a request body, and turns it into 'req.body'
// .use takes two arguments, first is what to look for (mount path), second is what middleware should be used
// if first argument is left blank, it just runs on every request
app.use(express.json());
app.use(morgan("dev"))

app.use("/api", require("./routes/movieRouter.js"));
// app.use("/api/tvShows", require("./routes/tvShowRouter.js"));

// Fake data
// const users = [
//     { name: "joe", age: 20 },
//     { name: "moe", age: 24 },
//     { name: "betty", age: 30 },
//     { name: "sarah", age: 34 },
//     { name: "mike", age: 41 },
// ]

// Arguments for get()
// 1. Endpoint (mount path) req=request res=response
// 2. CallBack function

// app.get("/user", (req, res) => {
//     res.send("Hello World!")
// })

// Arguments for listen()
// 1: Port
// 2: CallBack function
app.listen(9000, () => {
  console.log("The server is running on Port 9000");
});
