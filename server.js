const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const morgan = require('morgan');

const configDB = require('./config/database');
require('./config/passport')(passport);

const app = express();
const PORT = process.env.PORT || 2728;

// Connect to MongoDB
mongoose.connect(configDB.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));






// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

//juat added these 7:11pm
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





// Passport setup
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



const methodOverride = require('method-override');

// Middleware for overriding HTTP methods
app.use(methodOverride('_method'));

// Import and use routes

const routes = require('./app/models/routes'); // Import routes
routes(app, passport); // Pass `app` and `passport` to the routes file

const favoriteRoutes = require("./app/models/favorites");
app.use("/api/favorites", favoriteRoutes);


const Remedy = require('./app/models/remedy');
const User = require('./app/models/user');






// Start the server
app.listen(PORT, () => console.log(`HomeCure server running on port ${PORT}`));






