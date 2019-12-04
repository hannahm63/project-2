var db = require("../models");
const dotenv = require("dotenv");
const chxCoop = require("./chxCoop");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/games/:name", function(req, res) {
    chxCoop.searchGames(req.params.name, function(data) {
      console.log(data.title);
      res.render("results", { results: data });
      
    });
  });

  // // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });
};
