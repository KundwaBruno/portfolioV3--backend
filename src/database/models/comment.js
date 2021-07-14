"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Reply, Comment } = models;
      Comment.hasMany(Reply, {
        foriegnKey: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
      Reply.belongsTo(Comment);
    }
  }
  Comment.init(
    {
      UserName: DataTypes.STRING,
      role: DataTypes.STRING,
      body: DataTypes.STRING,
      PostId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
