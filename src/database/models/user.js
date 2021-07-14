const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      const { User, Post } = models;
      User.hasMany(Post, {
        foriegnKey: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
      Post.belongsTo(User);
    }
  }
  User.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUIDV4,
        defaultValue: () => uuidv4(),
      },
      names: { type: DataTypes.STRING, allowNull: false },
      userName: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
