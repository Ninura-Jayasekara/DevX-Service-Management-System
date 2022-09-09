require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const connection = require("./DB");

//import routers by creating constant variables
const adminRouter = require("./Routes/adminRoutes");
const stockRouter = require("./Routes/stockRoutes");
const facilityRouter = require("./Routes/serviceFacilityRoutes");
const customerRouter = require("./Routes/customerRoutes");
const paymentRouter = require("./Routes/paymentRoutes");

// database connection
connection();

// middlewares
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/admin", adminRouter);
app.use("/api/stock", stockRouter);
app.use("/api/facility", facilityRouter);
app.use("/api/customer", customerRouter);
app.use("/api/payment", paymentRouter);

const port = process.env.PORT || 3001;

app.listen(port, (err) => {
  if (err) console.log("Error ocuured in starting the server:", err);
  console.log(`DevX Server is listening on port ${port}...`);
});
