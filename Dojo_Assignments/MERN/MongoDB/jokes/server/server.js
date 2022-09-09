// import express
const express = require("express"); // import express from "express"
const app = express();
const port = 8000;

require("./config/mongoose.config");

// configure express to allow post/put
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);


app.listen( port, () => console.log(`Listening on port: ${port}`) );