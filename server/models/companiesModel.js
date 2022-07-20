const companies = (sequelize, Sequelize) => {
  const Companies = sequelize.define("companies", {
    name: { type: Sequelize.TEXT, allowNull: true },
    email: { type: Sequelize.TEXT, allowNull: false, unique: true },
    companyName: { type: Sequelize.TEXT, allowNull: true },
    position: { type: Sequelize.TEXT, allowNull: true },
    phoneNumber: { type: Sequelize.TEXT, allowNull: true, unique: true },
    password: { type: Sequelize.TEXT, allowNull: false },
  });

  return Companies;
};

module.exports = companies;
