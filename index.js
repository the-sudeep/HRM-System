//import dependencies .
const express = require("express");
const db = require('./config/db');
const bodyParser = require("body-parser");

require('dotenv').config();


const HR = require('./models/HR');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("The server is running on port %s ", PORT);
});

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));