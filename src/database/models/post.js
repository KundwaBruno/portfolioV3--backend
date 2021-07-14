"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Post, Like, Comment } = models;
      Post.hasMany(Comment, {
        foriegnKey: {
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
      Comment.belongsTo(Post);
      Post.hasMany(Like, {
        foriegnKey: {
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      });
      Like.belongsTo(Post);
    }
  }
  Post.init(
    {
      UserId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      sample: DataTypes.STRING,
      image: DataTypes.STRING,
      body: DataTypes.TEXT,
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
