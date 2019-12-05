module.exports = function(sequelize, DataTypes) {
  const Game = sequelize.define(
    "Game",
    {
      title: DataTypes.STRING,
      platform: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );

  Game.associate = function(models) {
    Game.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return Game;
};
