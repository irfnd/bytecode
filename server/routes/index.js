module.exports = (app) => {
  app.use("/users", require("./usersRoute"));
  app.use("/companies", require("./companiesRoute"));
  app.use("/auth", require("./authRoute"));
  app.use("/search", require("./pagination"));
};
