const { sequelizeJoi, Joi: joi } = require("sequelize-joi");
const Joi = joi.extend(require("joi-phone-number"));

const notifications = (sequelize, Sequelize) => {
  sequelizeJoi(sequelize);

  const Notifications = sequelize.define("Notification", {
    purpose: {
      type: Sequelize.TEXT,
      allowNull: false,
      schema: Joi.string().required(),
    },
    fullName: {
      type: Sequelize.TEXT,
      allowNull: false,
      schema: Joi.string().required(),
    },
    email:{
      type: Sequelize.TEXT,
      allowNull: false,
      schema: Joi.string(),
    },
    phoneNumber: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: false,
      schema: Joi.string().trim().phoneNumber({ defaultCountry: "ID", format: "e164" }).required(),
    },
    description: {
      type: Sequelize.TEXT,
      schema: Joi.string().required(),
    },
  });

  return Notifications;
};

module.exports = notifications;
