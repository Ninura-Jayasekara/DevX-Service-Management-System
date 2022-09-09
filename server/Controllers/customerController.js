const asyncHandler = require("express-async-handler");
const { isValidObjectId } = require("mongoose");
const Customer = require("../Models/customerModel");

const addCustomer = asyncHandler(async (req, res) => {
  // TODO: ADD Fields
  const { NIC, Name, DOB, Phone, Address, Email, Gender } = req.body;

  await Customer.findOne({ NIC }).then((customer) => {
    if (customer) return res.status(400).json("Customer already exists");
    const newCustomer = new Customer({
      NIC,
      Name,
      DOB,
      Gender,
      Phone,
      Address,
      Email,
    });

    newCustomer
      .save()
      .then(() => {
        res.json({ msg: "The Customer is added to the system successfully!" });
      })
      .catch((err) => {
        console.log(err);
      });
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
  if (!isValidObjectId(req.params.id))
    return res.status(400).send(`No Record with given id : $(req.params.id)`);
  Customer.findByIdAndDelete(req.params.id, (err, doc) => {
    if (!err) res.send(doc);
    else
      console.log(
        "Error in Deleting Customer Details :" +
          JSON.stringify(err, undefined, 2)
      );
  });
});

const updateCustomer = async (req, res) => {
  console.log(req.body);
  // TODO: ADD Fields
  if (!isValidObjectId(req.params.id))
    return res.status(400).send(`No Record with given id : $(req.params.id)`);

  const app = await req.body;

  let doc = await Customer.findByIdAndUpdate(
    { _id: req.params.id },
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
  console.log(doc);
};

module.exports = {
  addCustomer,
  viewCustomer,
  deleteCustomer,
  updateCustomer,
};
