require("dotenv").config();
const { SERVER_HOST, SERVER_PORT } = process.env;

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const app = express();
const port = SERVER_PORT || 8000;
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server);

const db = require("./models");
const syncdb = false;

const errorHandling = require("./middlewares/errorHandling");

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
require("./routes/index")(app);

app.use(errorHandling);


// route example to render
app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/example.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log(msg);
  });
});
// This will emit the event to all connected sockets
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); 
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
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
