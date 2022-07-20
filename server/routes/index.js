module.exports = (app) => {
  app.use("/users", require("./usersRoute"));
  app.use("/auth", require("./authRoute"));
  app.use("/skills", require("./skillsRoute"));

  app.use("/profile", require("./profileRoute"));
  app.use("/search", require("./pagination"));
};
