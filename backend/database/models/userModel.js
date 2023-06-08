import DataTypes from 'sequelize'
import sequelize from '../db_config.js'

const User = sequelize.define(
  "User",
  {
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    fullname: {
      type: DataTypes.STRING,
    },

    username: {
      type: DataTypes.STRING,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
    },

    phonenumber: {
      type: DataTypes.STRING,
      unique: true,
    },

    address: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
    },

    role: {
      type: DataTypes.ENUM("admin","user"),
      defaultValue: "user",
    },

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    updatedAt: {
      type: DataTypes.DATE,
    },
  },
);

User.sync()
export default User;