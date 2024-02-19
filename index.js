//import dependencies .
const express = require("express");
const bodyParser = require("body-parser");
const winston = require("winston");

//database connection
require('./config/db'); //database config
require('./config/logs'); // loggin config

// load data from .env file 
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

//error handling mechanisms
process.on('uncaughtException', err => {
    console.error('Uncaught Exception:', err.message);
    process.exit(1); // Exit the process after uncaught exception
  });
  
  // Error handling middleware for unhandled rejections
  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
  });
  


//models
require('./models/Job');

app.listen(PORT, () => {
    console.log("The server is running on port %s ", PORT);
});

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// load routes 
const jobRoutes = require("./routes/job");
app.use("/", jobRoutes);