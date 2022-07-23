require("dotenv").config();
const { SERVER_HOST, SERVER_PORT, CLIENT_HOST } = process.env;

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const app = express();
const port = SERVER_PORT || 8000;
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const db = require("./models");
const syncdb = false;

const errorHandling = require("./middlewares/errorHandling");

app.use(cors({ origin: CLIENT_HOST }));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
require("./routes/index")(app);

app.use(errorHandling);



app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/example.html');
});


io.on('connection', (socket) => {
  console.log('connected to', socket.id)
  const room = 'MYROOM'

  socket.on("adduser", (username) => {
      socket.user = username;
      users.push(username)
      console.log("latest users", users)
      io.sockets.emit("users", users)
  })
  socket.on("message", (message) => {
      io.sockets.emit("message", {
          user: socket.user,
          message: message,
      })
  })
  socket.on("disconnect", () => {
      console.log("deleting ", socket.user)

      if (socket.user) {
          users.splice(users.indexOf(socket.user), 1);
      }
      io.sockets.emit("users", users)
      console.log('remaining users: ', users)
  })
});

server.listen(port, () => {
  console.log(`\n> Server running on http://${SERVER_HOST}:${port}`);
  db.sequelize
    .sync({ force: syncdb })
    .then(() => console.log("> Connected to database\n"))
    .catch((err) => {
      console.log("> Something went wrong!", err.message);
      process.exit(1);
    });
});
