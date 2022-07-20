const { sequelizeJoi, Joi } = require("sequelize-joi");

const users = (sequelize, Sequelize) => {
  sequelizeJoi(sequelize);
  
  const Users = sequelize.define("users", {
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
      schema: Joi.string().trim().required(),
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true,
      schema: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    },
    phoneNumber: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true,
      schema: Joi.string()
        .trim()
        .pattern(/^[0-9]+$/),
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
      schema: Joi.string().required(),
    },
  });

  return Users;
};

module.exports = users;
