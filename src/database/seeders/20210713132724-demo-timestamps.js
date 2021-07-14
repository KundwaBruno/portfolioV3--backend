/* eslint-disable arrow-body-style */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Timestamps', [
      {
        title: "Apprentince",
        description: "Worked on personal portfolios/projects with new technologies of reactjs, mongoDb.",
        from: "1/9/2020",
        to: "1/11/2020",
        ExperienceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Project work",
        description: "Worked with a team of developers on a fullstack project with a stack of techologies involving - Reactjs , Postgres , nodejs, sass.",
        from: "1/11/2020",
        to: "1/1/2021",
        ExperienceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Full stack engineer",
        description: "Working with a big team on a real working project.",
        from: "1/1/2021",
        to: "current",
        ExperienceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Timestamps', null, {});
  },
};
