// jshint esversion:6


const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public")); 

app.set("view engine", "ejs");


mongoose.connect("mongodb://localhost/usersDB", { useNewUrlParser: true, useUnifiedTopology: true });

var currentUsername;
var currentUserSurname;

const User = mongoose.model("User" , {
    surname: String,
    middleName: String,
    name: String,
    birthday: Date,
    sexe: String,
    email: String,
    phone: {
        cel: String,
        home: String,
        Work: String
    },
    address: String,
    department: String,
    city: String,
    zipCode: String,
    userName: String,
    password: String,
    confirmPassword: String
});

const Subscriber = mongoose.model("Subscriber" , {
    email: {
        unique: true,
        type: String
    },
    newsAccept: Boolean,
    partnersNewsAccept: Boolean
});

const VideoItem = mongoose.model("VideoItem", {
    autor: String,
    title: String

});


app.get("/" , function(req, res) {
    res.render("index");
});

app.post("/" , function(req, res) {
    // console.log(req.body.receiveNews);
    console.log(req.body);
    if (req.body.receiveNews == "on") {
        userNewsAccept = true;
    } else {
        userNewsAccept = false;
    }
    if (req.body.emailByPartners == "on") {
        userEmailByPartners = true;
    } else {
        userEmailByPartners = false;
    }

    let subscriber = new Subscriber({
        email: req.body.email,
        newsAccept: userNewsAccept,
        partnersNewsAccept: userEmailByPartners
    });

    subscriber.save().then(() => {
        res.send("you successfully subscribe to the news letter.");
        // res.send(subscriber);
    });

});

app.get("/signup-personal" , function(req , res) {
    res.render("subscribe-form-perso");
});

app.get("/signup-contact" , function(req , res) {
    res.render("subscribe-form-contact");
});

app.get("/signup-account" , function(req , res) {
    res.render("subscribe-form-account");
});

app.post("/signup-personal", function(req , res) {
    const user = new User({
        surname: req.body.urSurname,
        middleName: req.body.urMiddleName,
        name: req.body.urName,
        birthday: req.body.birthday,
        sexe: req.body.sexe
    });

    currentUsername = req.body.urName;
    currentUserSurname = req.body.urSurname;

    
    user.save().then(() => console.log("save successfull"));
    res.redirect("/signup-contact");
});

app.post("/signup-contact" , function(req , res) {
    User.updateOne({name: currentUsername, surname: currentUserSurname}, {
        email: req.body.email,
        phone: {
            cel: req.body.mobilPhone,
            home: req.body.homePhone,
            Work: req.body.workPhone
        },
        adress: req.body.adress,
        department: req.body.department,
        city: req.body.city,
        zipCode: req.body.zipCode
    }, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(currentUsername);
        }
    });
    res.redirect("/signup-account");
});

app.post("/signup-account", function (req , res) {
    User.updateOne({name: currentUsername, surname: currentUserSurname}, {
        username: req.body.userName,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(currentUserSurname);
        }
    });
    // res.send("<h1>sign up complete successfully!</h1>");
    res.redirect("/");
});

app.get("/videos" , function(req , res) {
    res.render("videos-show");
});

app.listen(4000 , () => {
    console.log("server is running on port 3000");
} );