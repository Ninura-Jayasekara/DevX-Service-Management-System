const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  // TODO: ADD Fields
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
