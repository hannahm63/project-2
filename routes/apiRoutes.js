const db = require("../models");

module.exports = function(app) {
  // Create a new review if none exist already
  app.post("/api/games", function(req, res) {
    let rating = req.body.rating;
    let review = req.body.comment;
    let title = req.body.title;
    console.log(`Title: ${title}`);
    let platform = req.body.platform;
    console.log(`Platform: ${platform}`);

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
      res.redirect(req.originalUrl);
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
