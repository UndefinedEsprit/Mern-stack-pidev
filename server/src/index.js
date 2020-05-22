const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// passport and cookies 
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./services/passport');



const routes = require("./routes/routes");
//const middlewares = require('./middlewares');

const app = express();
const port = process.env.PORT || 5000;
const path = process.env.APP_ROOT;

app.use(cors());
app.use(express.json());
app.use(path, routes);
app.use('/templates', express.static(__dirname + '/../templates'))

// cookies session
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: ['76c24efdec42']
    }));

//Authentication
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);



const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//app.use(middlewares.notFound);
//app.use(middlewares.errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});