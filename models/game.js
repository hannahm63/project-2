module.exports = function(sequelize, DataTypes) {
    const Game = sequelize.define("Game", {
      title: DataTypes.STRING,
    });
    return Game;
  };