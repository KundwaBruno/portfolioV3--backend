'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Experiences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Experiences, Timestamps } = models;
      Experiences.hasMany(Timestamps, {
        foriegnKey: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      });
      Timestamps.belongsTo(Experiences);
    }
  };
  Experiences.init({
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    PortfolioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Experiences',
  });
  return Experiences;
};