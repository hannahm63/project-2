const db = require("../models");

module.exports = function(app) {
  // Create a new review if none exist already
  app.post("/api/games", function(req, res) {
    let rating = 5; // req.body.rating;
    let review = "I like this game!"; // req.body.review;
    let title = "Mario"; // Use jquery to target some value that has the game name
    let platform = "Switch"; // Use jquery to target some value that has the platform

    db.Game.findOrCreate({
      where: {
        title: title,
        platform: platform
      },
      defaults: {
        title: title,
        platform: platform
      }
    }).then(function(game) {
      gameId = game[0].dataValues.id;
      db.Review.create({
        comment: review,
        rating: rating,
        GameId: gameId
      });
      res.end();
    });
  });

// Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(
//       dbExample
//     ) {
//       res.json(dbExample);
//     });
//   });
};
