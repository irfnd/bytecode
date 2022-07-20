const users = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    name: { type: Sequelize.TEXT, allowNull: false },
    email: { type: Sequelize.TEXT, allowNull: false, unique: true },
    phoneNumber: { type: Sequelize.TEXT, allowNull: false, unique: true },
    type: { type: Sequelize.ENUM("jobseeker", "recruiter", "company"), defaultValue: "jobseeker" },
    password: { type: Sequelize.TEXT, allowNull: false },
  });

  return Users;
};

module.exports = users;
