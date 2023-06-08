import DataTypes from "sequelize";
import sequelize from '../db_config.js'


const Token = sequelize.define("Token", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  valid: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },

  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Token.sync()

export default Token