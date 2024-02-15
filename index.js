//import dependencies .
const express = require("express");
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("The server is running on port %s ", PORT);
});



