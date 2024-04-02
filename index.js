require('dotenv').config()
console.log('testing');


const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen( process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/twitter", (req, res) =>{
    res.send('https://www.instagram.com/?hl=en')
 })