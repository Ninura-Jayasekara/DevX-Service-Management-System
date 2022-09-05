const asyncHandler = require("express-async-handler");
const Customer = require("../Models/customerModel");

const addCustomer = asyncHandler(async (req, res) => {
  // TODO: ADD Fields
  const { supervisorId, name, description, members } = req.body;

  const newCustomer = new Customer({
    supervisorId,
    name,
    description,
    members,
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
    isEvaluate: req.body.isEvaluate,
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
