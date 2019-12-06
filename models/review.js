module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define(
    "Review",
    {
      comment: DataTypes.STRING,
      rating: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );

  Review.associate = function(models) {
    Review.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};
