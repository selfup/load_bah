const http = require('http');
const morgan = require('morgan');
const express = require('express');
const socketIo = require('socket.io');
const bodyParser = require("body-parser");

const dockerSpecificProcessEvents = require('./index-docker-process');

const PORT = process.env.PORT;
const app = express();

app.locals.loadBars = {};

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const server = http.createServer(app).listen(PORT, () => {
  console.log('Running on port', PORT);
});

const io = socketIo(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/remove/:id', (req, res) => {
  delete app.locals.loadBars[req.params.id];

  io.emit("updateLoadBars", app.locals.loadBars);

  res.json(app.locals.loadBars);
});

app.get('/:id/:current/:total', (req, res) => {
  const {
    id,
    current,
    total,
  } = req.params;

  app.locals.loadBars[id] = {
    id,
    current,
    total,
  };

  io.emit('updateLoadBars', app.locals.loadBars);

  res.json(app.locals.loadBars);
});

io.sockets.on('connection', (socket) => {
  socket.on('message', (channel, message) => {
    switch (channel) {
      default:
        return null;
    }
  });
});

dockerSpecificProcessEvents(server);
