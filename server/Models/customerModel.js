const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  // TODO: ADD Fields
  NIC: {
    type: String,
    required: [true, "Customer NIC is required"],
  },
  Name: {
    type: String,
    required: [true, "Customer Name is required"],
  },
  DOB: {
    type: Date,
    required: [true, "Customer DOB is required"],
  },
  Gender: {
    type: String,
    required: [true, "Customer Gender is required"],
  },
  Phone: {
    type: String,
    required: [true, "Customer Phone is required"],
  },
  Address: {
    type: String,
    required: [true, "Customer Address is required"],
  },
  Email: {
    type: String,
    required: [true, "Customer Email is required"],
  },
  noOfVisit: {
    type: String,
    required: true,
  },
  DateOfVisit: {
    type: Date,
    required: true,
  },
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
