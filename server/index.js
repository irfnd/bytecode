require("dotenv").config();
const { SERVER_HOST, SERVER_PORT } = process.env;
const errorControll = require('../server/controllers/error')

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const app = express();
const port = SERVER_PORT || 8000;

<<<<<<< HEAD


=======
const db = require("./models");
const syncdb = false;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
>>>>>>> 9c18bb65d3baa2440a6f557909c2d2149c0856b3
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes")(app);


app.use(errorControll.error)
app.use(errorControll.notFound)

app.listen(port, () => {
  console.log(`> Server running on http://${SERVER_HOST}:${port}`);
  db.sequelize
    .sync({ force: syncdb })
    .then(() => console.log("> Connected to database\n"))
    .catch((err) => {
      console.log("> Something went wrong!", err.message);
      process.exit(1);
    });
});
