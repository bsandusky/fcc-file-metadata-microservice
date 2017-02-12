'use strict'
const express = require("express")
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.IP + ":" + process.env.PORT)
})