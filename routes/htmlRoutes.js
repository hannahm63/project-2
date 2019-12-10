const db = require("../models");
const chxCoop = require("./chxCoop");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // Get search input to display relevant game-platform pairs
  app.get("/search/:name", function (req, res) {
    chxCoop.searchGames(req.params.name, function (data) {
      // what if "No result"?
      console.log(data);
      res.render("results", { results: data });
    });
  });

  app.get("/games/:name/:platform", function(req, res) {
    let name = req.params.name;
    let platform = req.params.platform;
    let bothDatas = [];

    // chxCoop.displayGameInfo(name, platform, function(data) {
    //   bothDatas.push(data);
    //   console.log("ChxCoop Stuff: " + JSON.stringify(bothDatas[0].result));
    // })
    // .then()

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
    }).then(function(review) {
      bothDatas.push(JSON.stringify(review[0].dataValues));
      console.log("bothDatas: " + bothDatas);
      res.end();
    });
  });

  // // Get display individual game info
  // app.get("/games/:name/:platform", function(req, res) {
  //   chxCoop.displayGameInfo(req.params.name, req.params.platform, function(data) {
  //     // what if "No result"?
  //     console.log(data.title);
  //     res.render("game", data);
  //   });
  //   // also need db call
  // });

  // // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};

let dbQuery = function() {
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
  }).then(function(review) {
    return review;
  });
};
