const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/rtv-db")
.then(() => console.log("Connected to the RTV DB"))

app.use("/auth", require("./routes/authRouter.js"))


app.use("/issue", require("./routes/issueRouter.js"))
app.use("/comments", require("./routes/commentsRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message})
})

app.listen(8000, () => {
    console.log("Server is running on port 8000")
})