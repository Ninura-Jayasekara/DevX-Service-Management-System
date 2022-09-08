const asyncHandler = require("express-async-handler");
const Customer = require("../Models/customerModel");

const addCustomer = asyncHandler(async (req, res) => {
  // TODO: ADD Fields
  const { NIC, Name, DOB, Phone, Address, Email } = req.body;

  const newCustomer = new Customer({
    NIC,
    Name,
    DOB,
    Phone,
    Address,
    Email,
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
  Customer.find((err, doc) => {
    if (!err) res.send(doc);
    else
      console.log(
        "Error in Retrieving Customer Details :" +
          JSON.stringify(err, undefined, 2)
      );
  });
});

const deleteCustomer = asyncHandler((req, res) => {
  Customer.findByIdAndDelete(req.params.id, (err, doc) => {
    if (!err) res.send(doc);
    else
      console.log(
        "Error in Deleting Customer Details :" +
          JSON.stringify(err, undefined, 2)
      );
  });
});

const updateCustomer = asyncHandler((req, res) => {
  // TODO: ADD Fields
  const app = {
    NIC: req.body.NIC,
    Name: req.body.Name,
    DOB: req.body.DOB,
    Phone: req.body.Phone,
    Address: req.body.Address,
    Email: req.body.Email,
  };
  Customer.findByIdAndUpdate(
    req.params.id,
    { $set: app },
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

module.exports = {
  addCustomer,
  viewCustomer,
  deleteCustomer,
  updateCustomer,
};
