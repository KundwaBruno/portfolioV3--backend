'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Portfolio, Skills, Experiences, Contact } = models;
      Portfolio.hasMany(Skills, {
        foriegnKey: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
      Skills.belongsTo(Portfolio);

      Portfolio.hasMany(Experiences, {
        foriegnKey: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
      Experiences.belongsTo(Portfolio);

      Portfolio.hasMany(Contact, {
        foriegnKey: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
      Contact.belongsTo(Portfolio);
    }
  };
  Portfolio.init({
    portfolioName: DataTypes.STRING,
    landingText: DataTypes.STRING,
    aboutTitle: DataTypes.STRING,
    aboutTextOne: DataTypes.STRING(10000),
    aboutTextTwo: DataTypes.STRING(10000),
    skillsTitle: DataTypes.STRING,
    experienceTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Portfolio',
  });
  return Portfolio;
};