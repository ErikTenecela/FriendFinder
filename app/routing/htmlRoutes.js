const express = require("express");
const path = require("path");

const app = express();

module.exports = app => {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};
