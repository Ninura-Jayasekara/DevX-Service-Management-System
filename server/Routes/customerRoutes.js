const express = require("express");

const router = express.Router();
const {
  addCustomer,
  viewCustomer,
  deleteCustomer,
  updateCustomer,
} = require("../Controllers/customerController");

router.post("/add", addCustomer);
router.get("/view", viewCustomer);
router.delete("/delete/:id", deleteCustomer);
router.put("/update/:id", updateCustomer);

module.exports = router;
