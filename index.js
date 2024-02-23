//import dependencies .
const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config(); // load .env

require("./config/db"); //database connection config
app.use(express.json({ limit: "20kb" })); //This ordering is crucial and this makes data to be accepted in form of json.
app.use(urlencoded({ extended: true, limit: "20kb" })); //Url bata aayeko data pani accept garchha.

// check .env values (validation)
require("./startup/envErrorHandler")();

// load routes
require("./startup/startRoutes")(app);

//error handling mechanisms//
require("./utils/errorHandling")();

// middlewares
app.use(express.static("./public"));

// starting the server on a port..
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
