/* eslint-disable arrow-body-style */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Experiences', [
      {
        id: 1,
        name: "Andela",
        link: "https://www.andela.com/",
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Techenfold",
        link: "https://www.andela.com/",
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Experiences', null, {});
  },
};
