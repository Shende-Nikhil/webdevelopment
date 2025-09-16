import express from "express";

let app = express();
let port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to our Node server!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
