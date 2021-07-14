module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Skills', [
      {
        id: 1,
        name: 'Javascript',
        icon: 'fab fa-js-square',
        color: '#EFD81D',
        link: '',
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'NodeJs',
        icon: 'fab fa-node-js',
        color: '#3A8338',
        link: '',
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'ReactJs',
        icon: 'fab fa-react',
        color: '#00D1F7',
        link: '',
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'React native',
        icon: 'fab fa-react',
        color: '#15AABF',
        link: '',
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'NextJs',
        icon: '/nextjs.svg',
        color: '',
        link: '',
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'CSS',
        icon: 'fab fa-css3-alt',
        color: '#D04F30',
        link: '',
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'SASS',
        icon: 'fab fa-sass',
        color: '#C76494',
        link: '',
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Git-Github',
        icon: 'fab fa-github',
        color: '#1F1E1E',
        link: '',
        PortfolioId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Skills', null, {});
  }
};