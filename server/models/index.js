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
db.Companies = require("./companiesModel")(sequelize, Sequelize);
db.Tokens = require("./tokensModel")(sequelize, Sequelize);

// Models Relation
db.Users.hasMany(db.Tokens);
db.Companies.hasMany(db.Tokens);
db.Tokens.belongsTo(db.Users);
db.Tokens.belongsTo(db.Companies);

module.exports = db;
