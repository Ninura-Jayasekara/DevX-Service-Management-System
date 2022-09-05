const asyncHandler = require("express-async-handler");

const Customer = require("../Models/customerModel");

const addCustomer = asyncHandler(async (req, res) => {
  const facilityName = req.body.facilityName;
  const facilityCost = Number(req.body.facilityCost);

  const newCustomer = new Customer({
    facilityName,
    facilityCost,
  });

  newCustomer
    .save()
    .then(() => {
      res.json("The Customer is added to the system successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
});

const viewCustomer = asyncHandler((req, res) => {
  Customer.find()
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      console.log(err);
    });
});

const deleteCustomer = asyncHandler((req, res) => {});

const updateCustomer = asyncHandler((req, res) => {});

module.exports = {
  addCustomer,
  viewCustomer,
  deleteCustomer,
  updateCustomer,
};
