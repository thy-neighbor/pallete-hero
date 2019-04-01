
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session      = require('express-session');
var path = require('path');
const cors = require('cors');

const {PORT, DATABASE_URL, CLIENT_ORIGIN} = require('./BackEnd/config.js');

app.use(cors(CLIENT_ORIGIN));
//app.use(bodyParser.json());

/* mongoose.connect('mongodb://127.0.0.1:27017/palette', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
}) */

//require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json({limit: '50mb', extended: true})); // get information from html forms
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/api/*', (req, res) => {
  res.json({ok: true});
});

require('./BackEnd/routes.js')(app); //load our routes and pass in our app and passport already configured

// closeServer needs access to a server object, but that only
// gets created when `runServer` runs, so we declare `server` here
// and then assign a value to it in run
let server;

// this function connects to our database, then starts the server
function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      databaseUrl,{ useNewUrlParser: true },
      err => {
        if (err) {
          return reject(err);
        }
        server = app
          .listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve();
          })
          .on("error", err => {
            mongoose.disconnect();
            reject(err);
          });
      }
    );
  });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log("Closing server");
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
