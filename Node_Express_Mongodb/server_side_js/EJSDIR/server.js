const express = require("express");
const app = express();
const Path = require("path");

const port = 5008;

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", Path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
   const followers = ["adam", "abc", "steve", "bob"];
   let { username } = req.params;
   res.render("instagram.ejs", { username, followers });
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
