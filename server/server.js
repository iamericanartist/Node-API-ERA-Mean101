"use strict"
//pull express in
const express = require("express")
//initialize
const app = express()
const port = process.env.PORT || 3000
//express base directory is the ROOT, not the folder where the server is - established in package.JSON
app.use(express.static('client'))

app.listen(port, () => console.log(`Listening on port: ${port}`))
