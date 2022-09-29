const asyncHandler = require("express-async-handler");

const Service = require("../Models/serviceModel");
const Facility = require("../Models/serviceFacilityModel");

const addService = asyncHandler(async (req, res) => {
    const vNo= req.body.vNo;
    const cusName= req.body.cusName;
    const entryDate= req.body.entryDate;
    const handoverDate= req.body.handoverDate;
    const description= req.body.description;
    const totalCost = Number(req.body.totalCost);
  
    const newService = new Service({
        vNo,
        cusName,
        entryDate,
        handoverDate,
        description,
        totalCost
    });
  
    newService
      .save()
      .then(() => {
        res.json("The Service is added to the system successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  });

const viewServices = asyncHandler((req, res) => {
  Service.find()
    .then((services) => {
      res.json(services);
    })
    .catch((err) => {
      console.log(err);
    });
});  

const retrieveFacilities = asyncHandler((req, res) => {
  Facility.find()
    .then((facilities) => {
      res.json(facilities);
    })
    .catch((err) => {
      console.log(err);
    });
}); 

module.exports = {
    addService,
    viewServices,
    retrieveFacilities
};