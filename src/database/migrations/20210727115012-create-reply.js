"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Replies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserName: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "userName",
        },
      },
      body: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.STRING,
      },
      CommentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Comments",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Replies");
  },
};
