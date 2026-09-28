const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/search", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Name: ${name}, Age: ${age}`);
});
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  res.send(`Product ID: ${productId}`);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});