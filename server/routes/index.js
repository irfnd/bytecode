module.exports = (app) => {
  app.use("/users", require("./usersRoute"));
  app.use("/companies", require("./companiesRoute"));
};
