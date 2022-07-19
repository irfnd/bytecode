const users = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    name: { type: Sequelize.TEXT, allowNull: false },
    email: { type: Sequelize.TEXT, allowNull: false, unique: true },
    phoneNumber: { type: Sequelize.TEXT, allowNull: false, unique: true },
    password: { type: Sequelize.TEXT, allowNull: false },
  });

  return Users;
};

module.exports = users;
 