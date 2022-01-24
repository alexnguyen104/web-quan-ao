const express = require("express")
const path = require('path')
const app = express()
let port = process.env.PORT || 8080

app.use(express.static(__dirname+'/files'))
app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+'/files/home.html'))
})

app.listen(port)
console.log("Listening on http://localhost:" + port)