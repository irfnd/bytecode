const { sequelizeJoi, Joi: joi } = require("sequelize-joi");
const Joi = joi.extend(require("joi-phone-number"));

const workExp = (sequelize, Sequelize) => {
  sequelizeJoi(sequelize);

  const WorkExp = sequelize.define("work_experience", {
    position: { type: Sequelize.TEXT, allowNull: false, schema: Joi.string().trim().required() },
    currentWork: { type: Sequelize.BOOLEAN, defaultValue: false },
    startDate: { type: Sequelize.DATEONLY, allowNull: false, schema: Joi.date().required() },
    endDate: { type: Sequelize.DATEONLY, schema: Joi.date() },
    shortDesc: { type: Sequelize.TEXT, schema: Joi.string().trim() },
  });

  return WorkExp;
};

module.exports = workExp;
