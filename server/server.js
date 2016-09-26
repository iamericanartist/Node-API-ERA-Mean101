"use strict"
const { json } = require("body-parser")
//pull express in
const express = require("express")
const mongoose = require("mongoose")
//initialize
const app = express()
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/meanchat'
const PORT = process.env.PORT || 3000

//express base directory is the ROOT, not the folder where the server is - established in package.JSON
app.use(express.static('client'))
app.use(json())

app.get("/api/title", (req, res) =>
  // res.send({ title: "MEAN 101 from Node!" })  //use objects here NOT STRINGS 
  res.json({ title: "MEAN CHAT / Node Diggity" })  //use objects here NOT STRINGS 
)

const Message = mongoose.model('message', {
  author: String,
  content: String,
}) 

app.get("/api/messages", (req, res, err) =>
  Message
    .find()
    .then(messages => res.json({ messages }))
    .catch(err)
)
  // res.json({
  //   messages: [
  //     {
  //       author: "John",
  //       content: "SAAAAAAAPPP",
  //     },
  //     {
  //       author: "Anon",
  //       content: "#whodrewthepoop",
  //     },
  //     {
  //       author: "Scott",
  //       content: "noice",
  //     },
  //   ],  //use objects here NOT STRINGS

  // })

app.post('/api/messages', (req, res, err) => {
  const msg = req.body
  Message
    .create(msg)
    .then(msg => res.json(msg))
    .catch(err)
})

mongoose.Promise = Promise
mongoose.connect(MONGODB_URL, () =>
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
)
