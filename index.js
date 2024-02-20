//import dependencies .
const express = require("express");
const bodyParser = require("body-parser");

// TODO :
// const winston = require('winston');
// require('./config/logs')();



//database connection
require('./config/db'); //database config
require('./config/logs'); // loggin config

// load data from .env file 
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

// load routes 
const jobRoutes = require("./routes/jobRoutes");
app.use("/", jobRoutes);

const applicantRoutes = require("./routes/applicantRoutes")
app.use("/applicant",applicantRoutes)

//error handling mechanisms//
require('./utils/errorHandling')() 


app.listen(PORT, () => {
    console.log("The server is running on port %s ", PORT);
});

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




