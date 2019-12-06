const db = require("../models");
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

  app.get("/games/:name/:platform", function(req, res) {
    let name = req.params.name;
    let platform = req.params.platform;

    // If game exists in our db, grab all reviews that match that game's id
    db.Review.findAll({
      include: [
        {
          model: db.Game,
          where: {
            title: name,
            platform: platform
          }
        }
      ]
    }).then(function(data) {
      res.render("results", { results: data });
    });
  });

  // // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });
};
