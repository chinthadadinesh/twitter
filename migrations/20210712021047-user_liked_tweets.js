
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Liked_Tweets', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    tweetId:{
      allowNull: false,
      type: Sequelize.STRING,
    },
    userId:{
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  },),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Liked_Tweets'),
};

