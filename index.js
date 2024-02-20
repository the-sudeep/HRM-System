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

<<<<<<< HEAD
const applicantRoutes = require("./routes/applicantRoutes")
app.use("/applicant",applicantRoutes)
=======
const hrRoutes = require('./routes/userRoute');
app.use("/", hrRoutes);
>>>>>>> b48bca2d1619e1e9abf0c3dc07b53aa8a351354c

//error handling mechanisms//
require('./utils/errorHandling')() 


app.listen(PORT, () => {
    console.log("The server is running on port %s ", PORT);
});

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




