module.exports = (app) => {
  // Users, Recuiters, Companies Routes
  app.use("/auth", require("./authRoute"));
  app.use("/profile", require("./profileRoute"));

  app.use("/jobseekers", require("./jobseekerRoute"));

  app.use("/users", require("./usersRoute"));
  app.use("/skills", require("./skillsRoute"));
  app.use("/work-exp", require("./workExpRoute"));
  app.use("/portfolio", require("./portfolioRoute"));

  app.use("/search", require("./pagination"));
  app.use("/notification", require("./notificationRoute"));
};
