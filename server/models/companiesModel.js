const { sequelizeJoi, Joi } = require("sequelize-joi");

const companies = (sequelize, Sequelize) => {
  sequelizeJoi(sequelize);

  const Companies = sequelize.define("companies", {
    name: {
      type: Sequelize.TEXT,
      allowNull: true,
      schema: Joi.string().trim(),
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true,
      schema: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    },
    companyName: {
      type: Sequelize.TEXT,
      allowNull: true,
      schema: Joi.string().trim().required(),
    },
    position: {
      type: Sequelize.TEXT,
      allowNull: true,
      schema: Joi.string().trim().required(),
    },
    phoneNumber: {
      type: Sequelize.TEXT,
      allowNull: true,
      unique: true,
      schema: Joi.string()
        .max(13)
        .pattern(/^[0-9]+$/)
        .required(),
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
      schema: Joi.string().required(),
    },
  });

  return Companies;
};

module.exports = companies;
