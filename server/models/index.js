require("dotenv").config();
const { DB, DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

// Initialize Sequelize
const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB,
  logging: false,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models Schema
db.Users = require("./usersModel")(sequelize, Sequelize);
db.Tokens = require("./tokensModel")(sequelize, Sequelize);
db.UserProfile = require("./userProfileModel")(sequelize, Sequelize);
db.CompanyProfile = require("./companyProfileModel")(sequelize, Sequelize);
db.Skills = require("./skillsModel")(sequelize, Sequelize);
db.UserSkills = require("./userSkillsModel")(sequelize, Sequelize);
db.Companies = require("./companiesModel")(sequelize, Sequelize);
db.WorkExp = require("./workExpModel")(sequelize, Sequelize);

// Users Relations
db.Users.hasMany(db.Tokens, { onDelete: "cascade" });
db.Users.belongsToMany(db.Skills, { through: db.UserSkills, onDelete: "cascade" });
db.Users.hasOne(db.UserProfile, { onDelete: "cascade" });
db.Users.hasOne(db.CompanyProfile, { onDelete: "cascade" });
db.Users.belongsToMany(db.Companies, { through: db.WorkExp, onDelete: "cascade" });

// User + Company Profile Relations
db.UserProfile.belongsTo(db.Users);
db.CompanyProfile.belongsTo(db.Users);
db.CompanyProfile.hasMany(db.Companies, { onDelete: "cascade" });

// Tokens Relations
db.Tokens.belongsTo(db.Users);

// Skills Relations
db.Skills.belongsToMany(db.Users, { through: db.UserSkills });

// Comanpanies Relations
db.Companies.belongsToMany(db.Users, { through: db.WorkExp });
db.Companies.belongsTo(db.CompanyProfile);

module.exports = db;
