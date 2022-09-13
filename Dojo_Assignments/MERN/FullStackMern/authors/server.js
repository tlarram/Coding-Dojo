const express = require("express"); // import express from "express"
const app = express();
const port = 8000;
const cors = require('cors')
require("./server/config/mongoose.config");

// configure express to allow post/put
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

const AllMyAuthorRoutes = require("./server/routes/routes");
AllMyAuthorRoutes(app);


app.listen( port, () => console.log(`Listening on port: ${port}`) );