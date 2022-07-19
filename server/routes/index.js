module.exports = (app) => {
  app.use("/users", require("./usersRoute"));
  app.use("/company", require("./companyRoute"));
};
