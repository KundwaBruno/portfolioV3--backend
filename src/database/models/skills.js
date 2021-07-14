'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Skills.init({
    name: DataTypes.STRING,
    icon: DataTypes.STRING,
    color: DataTypes.STRING,
    link: DataTypes.STRING,
    PortfolioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Skills',
  });
  return Skills;
};