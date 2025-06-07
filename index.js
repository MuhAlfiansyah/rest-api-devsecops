const express = require("express");
const app = express();
app.use(express.json());

let books = [];

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book added.");
});

app.listen(3000, () => {
  console.log("API aktif di http://172.20.18.57:3000");
});

