'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Portfolios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      portfolioName: {
        type: Sequelize.STRING
      },
      landingText: {
        type: Sequelize.STRING
      },
      aboutTitle: {
        type: Sequelize.STRING
      },
      aboutTextOne: {
        type: Sequelize.STRING(10000)
      },
      aboutTextTwo: {
        type: Sequelize.STRING(10000)
      },
      skillsTitle: {
        type: Sequelize.STRING
      },
      experienceTitle: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Portfolios');
  }
};