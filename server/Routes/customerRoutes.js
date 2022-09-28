const express = require("express");
const { isValidObjectId } = require("mongoose");
const Customer = require("../Models/customerModel");

const { protect } = require("../Middleware/authMiddleware");

const router = express.Router();

const {
  addCustomer,
  viewCustomer,
  deleteCustomer,
} = require("../Controllers/customerController");

router.post("/add", addCustomer);
router.get("/view", viewCustomer);
router.delete("/delete/:id", deleteCustomer);

// Update Route
router.put("/update/:id", async (req, res) => {
  if (!isValidObjectId(req.params.id))
    return res.status(400).send(`No Record with given id : $(req.params.id)`);

  Customer.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true },
    (err, doc) => {
      if (!err) res.send(doc);
      else
        console.log(
          "Error in Updating Customer Details :" +
            JSON.stringify(err, undefined, 2)
        );
    }
  );
});

module.exports = router;
