var db = require("../models");
const dotenv = require("dotenv");
const chxCoop = require("./chxCoop");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/games/:name", function(req, res) {
  //   chxCoop.searchGames(req.params.name, function(data) {
  //     console.log(data.title);
  //     res.render("results", { results: data });
      
  //   });
  // });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
