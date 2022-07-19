const tokens = (sequelize, Sequelize) => {
  const Tokens = sequelize.define("tokens", {
    idUser: { type: Sequelize.INTEGER, allowNull: true },
    idCompany: { type: Sequelize.INTEGER, allowNull: true },
    name: { type: Sequelize.TEXT, allowNull: false },
    email: { type: Sequelize.TEXT, allowNull: false, unique: true },
    phoneNumber: { type: Sequelize.TEXT, allowNull: false, unique: true },
    password: { type: Sequelize.TEXT, allowNull: false },
  });

  return Tokens;
};

module.exports = tokens;
