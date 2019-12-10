module.exports = function(sequelize, DataTypes) {
  const Review = sequelize.define("Review", {
    // nickname: DataTypes.STRING,
    comment: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Review.associate = function(models) {
    Review.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};
