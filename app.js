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

app.get("/*xyz", (req, res) => {
  res.send(`That's all I wrote.`);
});

app.get("/capital-letters/:str", (req, res) => {
  // let upperCased = `${req.params.str}`.toUpperCase();
  res.send(`${req.params.str}`.toUpperCase());
});

app.get(["/margot/:str", "/margeaux/:str"], (req, res) => {
  //   if (!req.path.toLowerCase().startsWith("/margot")) {
  //     res.send(
  //       `${req.params.str}`.charAt(0).toUpperCase() +
  //         `${req.params.str}`.substr(1).toLowerCase()
  //     );
  //   }
  res.send(
    `${req.params.str}`.charAt(0).toUpperCase() +
      `${req.params.str}`.substr(1).toLowerCase()
  );
});

app.get("/about/foo", (req, res) => {
  res.send(404);
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
