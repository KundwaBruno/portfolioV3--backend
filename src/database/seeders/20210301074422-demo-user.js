/* eslint-disable arrow-body-style */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        id: "eb939fc1-99e8-4943-bc0d-8c3b3433d2cb",
        names: "kundwa bruno",
        userName: "KBM",
        email: "kundwabruno@gmail.com",
        password:
          "$2b$10$8eToveRwfP5MoPQmhcbX1eMSFGKPbW0HEh592vqLLZkQlAdURqrLu",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "970e443e-70a3-4d55-b536-cf7bd03c066c",
        names: "John Doe",
        userName: "johndoe",
        email: "johndoe@gmail.com",
        password:
          "$2b$10$8eToveRwfP5MoPQmhcbX1eMSFGKPbW0HEh592vqLLZkQlAdURqrLu",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
