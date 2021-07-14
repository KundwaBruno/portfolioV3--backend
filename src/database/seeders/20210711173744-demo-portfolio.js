module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Portfolios", [
      {
        id: 1,
        portfolioName: "KBM",
        landingText: "Hi there!, welcome to my portfolio..",
        aboutTitle: "Wondering who i am?",
        aboutTextOne:
          "Hi again! My full name is Kundwa Bruno Materne, I am a self taught and passionate full stack software developer based in Rwanda-Kigali ( Africa ). I enjoy solving problems on the web by making progressive web applications using the latest technologies.",
        aboutTextTwo:
          "More about myself, I once was a student on freecodecamp certifying on Responsive web design, Javascript algorithms and Datastructures, Front End development libraries and API and Micro services. Later on attended a 9 months Software development bootcamp at Andela Rwanda.",
        skillsTitle: "Skills..",
        experienceTitle: "My Experience.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Portfolios", null, {});
  },
};
