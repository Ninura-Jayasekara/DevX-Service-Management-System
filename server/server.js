require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connection = require("./DB");

//import routers by creating constant variables



// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());


// routes



const port = process.env.PORT || 3000;
app.listen(port, console.log(`DevX Server is listening on port ${port}...`));