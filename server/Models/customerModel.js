const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
