module.exports = (app) => {
  app.use("/users", require("./usersRoute"));
  app.use("/auth", require("./authRoute"));
  app.use("/profile", require("./profileRoute"));

  app.use("/work-exp", require("./workExpRoute"));
  app.use("/skills", require("./skillsRoute"));

  app.use("/search", require("./pagination"));
};
