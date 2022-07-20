const userProfile = (sequelize, Sequelize) => {
  const UserProfile = sequelize.define("user_profile", {
    name: { type: Sequelize.TEXT, allowNull: false },
    email: { type: Sequelize.TEXT, allowNull: false, unique: true },
    phoneNumber: { type: Sequelize.TEXT, allowNull: false, unique: true },
    type: { type: Sequelize.TEXT },
    domicile: { type: Sequelize.TEXT },
    position: { type: Sequelize.TEXT },
    companyName: { type: Sequelize.TEXT },
    shortDesc: { type: Sequelize.TEXT },
    instagram: { type: Sequelize.TEXT },
    linkedin: { type: Sequelize.TEXT },
    github: { type: Sequelize.TEXT },
    photo: { type: Sequelize.TEXT },
  });

  return UserProfile;
};

module.exports = userProfile;
