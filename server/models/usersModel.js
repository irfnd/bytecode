const { sequelizeJoi, Joi: joi } = require("sequelize-joi");
const { joiPasswordExtendCore } = require("joi-password");
const Joi = joi.extend(require("joi-phone-number"));
const JoiPassword = Joi.extend(joiPasswordExtendCore);

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
      schema: Joi.string().trim().email().required(),
    },
    phoneNumber: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true,
      schema: Joi.string().trim().phoneNumber({ defaultCountry: "ID", format: "e164" }).required(),
    },
    type: {
      type: Sequelize.ENUM("jobseeker", "recruiter", "company"),
      defaultValue: "jobseeker",
      schema: Joi.string().trim().valid("jobseeker", "recruiter", "company").required(),
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
      schema: JoiPassword.string()
        .min(8)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required(),
    },
  });

  return Users;
};

module.exports = users;
