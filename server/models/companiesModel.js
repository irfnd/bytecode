const companies = (sequelize, Sequelize) => {
  const Companies = sequelize.define("companies", {
    name: { type: Sequelize.TEXT, allowNull: false },
    email: { type: Sequelize.TEXT, allowNull: false, unique: true },
    phoneNumber: { type: Sequelize.TEXT, allowNull: false, unique: true },
    password: { type: Sequelize.TEXT, allowNull: false },
  });

  return Companies;
};

module.exports = companies;
