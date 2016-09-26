"use strict"
//pull express in
const express = require("express")
//initialize
const app = express()
const port = process.env.PORT || 3000
//express base directory is the ROOT, not the folder where the server is - established in package.JSON
app.use(express.static('client'))

app.get("/api/title", (req, res) =>
  // res.send({ title: "MEAN 101 from Node!" })  //use objects here NOT STRINGS 
  res.json({ title: "MEAN CHAT / Node Diggity" })  //use objects here NOT STRINGS 
)

app.get("/api/messages", (req, res) =>
  res.json({
    messages: [
      {
        author: "John",
        content: "SAAAAAAAPPP",
      },
      {
        author: "Anon",
        content: "#whodrewthepoop",
      },
      {
        author: "Scott",
        content: "noice",
      },
    ],  //use objects here NOT STRINGS
     
  })
)

app.listen(port, () => console.log(`Listening on port: ${port}`))
