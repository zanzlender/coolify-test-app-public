const express = require("express");

const app = express();

app.get("/", function (req, res) {
  console.log("ON ROUTE /");
  res.send(`Hello World ${req.url}`);
});

app.get("/hello", function (req, res) {
  console.log("ON ROUTE /hello");
  res.send(`Hello world ${req.url}`);
});

app.get("/nowork", function (req, res) {
  console.log("ON ROUTE /nowork");
  res.status(404).send("NOT_FOUND");
});

app.listen(3000, () => {
  console.log("STARTING SERVER ON PORT 3000");
});
