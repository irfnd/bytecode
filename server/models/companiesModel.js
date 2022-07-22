const { sequelizeJoi, Joi } = require("sequelize-joi");

const companies = (sequelize, Sequelize) => {
  sequelizeJoi(sequelize);

  const Companies = sequelize.define("companies", {
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
      schema: Joi.string().trim().required(),
    },
    photo: {
      type: Sequelize.TEXT,
      schema: Joi.string().trim(),
    },
  });

  return Companies;
};

module.exports = companies;
