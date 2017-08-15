const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');
const posts = require('./routes/posts');
const upload = require('./routes/upload.js'); 

mongoose.Promise = require('bluebird');
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
app.use('/posts', posts);
app.use('/upload', upload);

// Index route
app.get('/', (req, res) =>
    res.send('Invalid Endpoint'));

app.get('*', (req,res) =>
    res.sendFile(path.join(__dirname, 'public/index.html')));

const http = require('http').Server(app);

// const io = require('socket.io')(http);

//     // Start server
// app.listen(port, (err) => {
//     if(err) throw err;
//     console.log('Server started on port '+port);
// });


// io.on('connection', (socket) => {
//     console.log('user connected');

//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//     });

//     // socket.on('profile', () => {
//     //     io.emit('profile','');
//     // });

//     // socket.on('post', () => {
//     //     io.emit('post','');
//     // });


//     // socket.on('posts', () => {
//     //     console.log("got message");
//     //     io.emit('posts');
//     // });

//     // socket.on('add-message', (message) => {
//     //     console.log('!!!!!!!'+message);
//     //     io.emit('top-posts', {type:'top-posts', text: message});    
//     // });
// });



// // io.on('connection', (socket) => {

// // });


// exports.socketEmit = function(event , data){
//     io.emit(event, data);    
//     //io.emit(subscription,{'type': type, 'message': message});
// }


// Start Server
http.listen(port, () => {
    console.log('Server started on port '+ port);
});