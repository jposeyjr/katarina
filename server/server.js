import express from 'express';
import passport from './strategies/user.strategy.js';
import sessionMiddleware from './modules/session-middleware.js';
import userRouter from './routes/user.router.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
  `${process.env.MONGO_URI}`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected To Mongo');
  }
);

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport Session Configuration
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

//setting up Web sockets and allow traffic to come through
import { createServer } from 'http';
const http = createServer(app);
//allow us to send data without cors issue
import { Server } from 'socket.io';
const io = new Server(http);

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
