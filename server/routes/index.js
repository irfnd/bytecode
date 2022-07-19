module.exports = (app) => {
  app.use("/users", require("./usersRoute"));
  app.use("/company", require("./companyRoute"));
  app.use("/auth", require("./authCompany"));
  app.use("/search", require("./pagination"));
};
