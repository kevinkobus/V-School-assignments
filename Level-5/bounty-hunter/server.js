const express = require("express");
const app = express();

app.use(express.json());

app.use("/api", require("./routes/bountiesRouter.js"))


app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})