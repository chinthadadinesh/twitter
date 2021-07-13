
module.exports = (sequelize, DataTypes) => {
    const LikedTweets = sequelize.define('LikedTweets', {
      userId: DataTypes.STRING,
      tweetId: DataTypes.STRING,
    }, {
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      },
    }, {});
    return LikedTweets;
  };
  