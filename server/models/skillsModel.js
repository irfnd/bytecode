const skills = (sequelize, Sequelize) => {
  const Skills = sequelize.define("skills", {
    name: { type: Sequelize.TEXT, allowNull: false },
  });

  return Skills;
};

module.exports = skills;
