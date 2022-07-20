const { sequelizeJoi, Joi } = require("sequelize-joi");

const tokens = (sequelize, Sequelize) => {
  sequelizeJoi(sequelize);

  const Tokens = sequelize.define("tokens", {
    types: { 
      type: Sequelize.ENUM("refreshToken", "resetPassword"), 
      defaultValue: "refreshToken",
      schema: Joi.string(),
    },
    token: { 
      type: Sequelize.TEXT, 
      allowNull: false,
      unique: true,
      schema: Joi.string(),
     },
  });

  return Tokens;
};

module.exports = tokens;
