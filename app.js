'use strict'
const express = require("express")
const multer = require("multer")
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.post('/upload', multer({dest: './uploads'}).single('file'), function (req, res, next) {
    res.send({file: req.file})
})


app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.IP + ":" + process.env.PORT)
})