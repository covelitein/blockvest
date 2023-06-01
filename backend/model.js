import DataTypes from 'sequelize'
import sequelize from './db.js'

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

    type: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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