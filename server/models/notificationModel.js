const { sequelizeJoi, Joi: joi } = require("sequelize-joi");
const Joi = joi.extend(require("joi-phone-number"));

const Notification = (sequelize, Sequelize) => {
  sequelizeJoi(sequelize);

  const Notification = sequelize.define("Notification", {
    tujuanTentang: {
      type: Sequelize.TEXT,
      allowNull: false,
      schema: Joi.string().required(),
    },
    namaLengkap: {
      type: Sequelize.TEXT,
      allowNull: false,
      schema: Joi.string().required(),
    },
    phoneNumber: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true,
      schema: Joi.string().trim().phoneNumber({ defaultCountry: "ID", format: "e164" }).required(),
    },
    description: {
      type: Sequelize.TEXT,
      schema: Joi.string().required(),
    },
  });

  return Notification;
};

module.exports = Notification;
