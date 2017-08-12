const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');
const dashboard = require('./routes/dashboard');
const profiles = require('./routes/profiles');
const profile = require('./routes/profile');
const upload = require('./routes/upload.js'); 

// Connect to DataBase
mongoose.connect(config.database);

//On connection
mongoose.connection.on('connected', () => 
    console.log('Connected to database: '+config.database));

//On connection
mongoose.connection.on('error', (err) => 
    console.log('DataBase error: '+err));


// Express app
const app = express();

// Port
const port = process.env.PORT || 8080;
// var port = 3000; 
// for(let i = 3; i < process.argv.length; i++){
//     if(process.argv[i-1] === '-p' && Number.isInteger(Number(process.argv[i])))
//         port = Number(process.argv[i]);
// }

// CORS middleware
app.use(cors());

////////////////////////////////

// //create a cors middleware
// app.use(function(req, res, next) {
// //set headers to allow cross origin request.
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


//////////////////////////////////////////

// Set static foleder
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(express.static('./uploads/images'));


app.use('/users', users);
app.use('/dashboard', dashboard);
app.use('/profiles', profiles);
app.use('/profile', profile);
app.use('/upload', upload);

// Index route
app.get('/', (req, res) =>
    res.send('Invalid Endpoint'));

app.get('*', (req,res) =>
    res.sendFile(path.join(__dirname, 'public/index.html')));

// Start server
app.listen(port, (err) => {
    if(err) throw err;
    console.log('Server started on port '+port);
});




/*
const http = require('http');
const server = http.createServer(app);
app.listen(port, (err) => {
    if(err) throw err;
    console.log('Server started on port '+port);
});
var io = require('socket.io').listen(server);
// Socket events
io.sockets.on('connection', (socket) => {
  console.log('Socket connected: ', socket);

  // Socket event for user update
  socket.on('userUpdated', (user) => {
    console.log('received createPost: ', user);
    io.emit('postCreated', user);
  });


  // Socket event for post creation
  socket.on('createPost', (post) => {
    console.log('received createPost: ', post);
    io.emit('postCreated', post);
  });

  // Socket event for gist updated
  socket.on('updatePost', (post) => {
    console.log('received updatePost: ', post);
    io.emit('postUpdated', post);
  });
});
*/