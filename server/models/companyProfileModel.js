const companyProfile = (sequelize, Sequelize) => {
  const CompanyProfile = sequelize.define("company_profile", {
    name: { type: Sequelize.TEXT, allowNull: false },
    email: { type: Sequelize.TEXT, allowNull: false, unique: true },
    phoneNumber: { type: Sequelize.TEXT, allowNull: false, unique: true },
    type: { type: Sequelize.TEXT },
    specialized: { type: Sequelize.TEXT },
    location: { type: Sequelize.TEXT },
    shortDesc: { type: Sequelize.TEXT },
    linkedin: { type: Sequelize.TEXT },
    instagram: { type: Sequelize.TEXT },
    photo: { type: Sequelize.TEXT },
  });

  return CompanyProfile;
};

module.exports = companyProfile;
