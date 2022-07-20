const tokens = (sequelize, Sequelize) => {
  const Tokens = sequelize.define("tokens", {
    types: { type: Sequelize.ENUM("refreshToken", "resetPassword"), defaultValue: "refreshToken" },
    token: { type: Sequelize.TEXT, allowNull: false, unique: true },
  });

  return Tokens;
};

module.exports = tokens;
