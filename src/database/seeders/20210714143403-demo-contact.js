/* eslint-disable arrow-body-style */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        name: "Twitter",
        description: "",
        icon: "fab fa-twitter",
        link: "https://twitter.com/bruno_kbm",
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Instagram",
        description: "",
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/bruno_kun/",
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Facebook",
        description: "",
        icon: "fab fa-facebook-f",
        link: "https://www.facebook.com/kundwa.bruno/",
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Github",
        description: "",
        icon: "fab fa-github",
        link: "https://github.com/KundwaBruno",
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Email",
        description: "",
        icon: "far fa-envelope",
        link: "mailto:kundwabruno@gmail.com",
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contacts', null, {});
  },
};
