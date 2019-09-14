require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http").Server(app);
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("client/build"));

http.listen(PORT, function() {
    console.log("Listening on port ", PORT, ". Visit http://localhost:5000 in your browser.");
});

module.exports.app = app;