// jshint esversion:6


const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use( express.static("public"));



app.get("/" , function(req, res) {
    res.render("index");
});

app.get("/sign-up" , function(req , res) {
    res.render("subscribe-form");
});

app.get("/videos" , function(req , res) {
    res.render("videos-show");
});

app.listen(3000 , () => {
    console.log("server is running on port 3000")
} );