// import express
const express = require("express") // import express from "express"
const app = express()
const port = 8000

// configure express to allow post/put
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const Routes = require("./routes/demo.routes")
Routes(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );