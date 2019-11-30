module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
      comment: DataTypes.STRING,
      rating: DataTypes.INTEGER
    });
    return Review;
  };