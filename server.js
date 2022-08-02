const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const shoes = require("./products.json");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/products", (req, res) => {
  res.json(shoes);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
