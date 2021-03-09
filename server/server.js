const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const gamesRouter = require('./routes/games.router');
const inviteRouter = require('./routes/invites.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/games', gamesRouter);
app.use('/api/invites', inviteRouter);
// app.use('/api/babylist', babyRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

//setting up Web sockets and allow traffic to come through
const http = require('http').createServer(app);
//allow us to send data without cors issue
const io = require('socket.io')(http);

let socket_id = [];
io.on('connection', (socket) => {
  socket_id.push(socket.id);
  // if the same user re-connects with the same id it will remove the old one to stop duplicates from same client
  if (socket_id[0] === socket.id) {
    io.removeAllListeners('connection');
  }
  console.log('New client connected', socket.id);
  //listen for the new message then it will emit it to everyone but the person that sent it.
  socket.on('newMessage', (data) => {
    io.emit('newMessage', data);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

/** Listen **/
http.listen(PORT, () => {
  console.log('Websocket listing on port: ' + PORT);
});
