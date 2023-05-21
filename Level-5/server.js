// First Express Server
const express = require("express")
const app = express()


// Arguments for get()
// 1. Endpoint (mount path) req=request res=response
// 2. CallBack function

// app.get("/user", (req, res) => {
//     res.send("Hello World!")
// })
    app.get("/user", (req, res) => {
        res.send({name: "joe", age: 20})
    })



    // Arguments for listen() 
    // 1: Port 
    // 2: CallBack function
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
} 
)