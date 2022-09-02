require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connection = require("./DB");

//import routers by creating constant variables
const adminRouter = require('./Routes/adminRoutes');
const stockRouter = require('./Routes/stockRoutes');
const facilityRouter = require('./Routes/serviceFacilityRoutes');


// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use("/api/admin", adminRouter);
app.use("/api/stock", stockRouter);
app.use("/api/facility", facilityRouter);


const port = process.env.PORT || 3000;
app.listen(port, console.log(`DevX Server is listening on port ${port}...`));