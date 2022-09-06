require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connection = require("./DB");

//import routers by creating constant variables
const adminRouter = require("./Routes/adminRoutes");
const stockRouter = require("./Routes/stockRoutes");
const facilityRouter = require("./Routes/serviceFacilityRoutes");
const customerRouter = require("./Routes/customerRoutes");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/admin", adminRouter);
app.use("/api/stock", stockRouter);
app.use("/api/facility", facilityRouter);
app.use("/api/customer", customerRouter);

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) console.log("Error ocuured in starting the server:", err);
  console.log(`DevX Server is listening on port ${port}...`);
});
