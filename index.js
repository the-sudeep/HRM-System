//import dependencies .
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
require('dotenv').config(); // load .env


require('./config/db'); //database connection config

// check .env values (validation)
require('./startup/envErrorHandler')();


// load routes 
require('./startup/startRoutes')(app);

//error handling mechanisms//
require('./utils/errorHandling')()


// middlewares
app.use(express.static("./public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// starting the server on a port..
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});


