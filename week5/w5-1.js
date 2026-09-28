const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});
app.get("/about", (req, res) => {
  res.send("This is About Page");
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  res.send(`User ID is: ${id}`);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});