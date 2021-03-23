//import express
//access express
//use app to .get
//Hello from Express! is the response
//listening

const express = require("express");
const app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.all("*", (req, res) => {
  //   console.log(req.method);
  let random = Math.floor(Math.random() * 10);
  res.render("index", {
    method: req.method,
    path: req.path,
    random: random,
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});
