"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reply.init(
    {
      UserName: DataTypes.STRING,
      role: DataTypes.STRING,
      body: DataTypes.STRING,
      CommentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reply",
    }
  );
  return Reply;
};
