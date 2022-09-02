const asyncHandler = require('express-async-handler')

const Facility = require('../Models/serviceFacilityModel')

const addFacility = asyncHandler(async (req, res) => {

    const facilityName = req.body.facilityName;
    const facilityCost = Number(req.body.facilityCost);

    const newFacility = new Facility({

        facilityName,
        facilityCost
    })

    newFacility.save().then(()=>{
        res.json("The Service Facility is added to the system successfully!")
    }).catch((err)=>{
        console.log(err);
    })


})

const viewFacilities = asyncHandler(async(req, res)=>{
    Facility.find().then((facilities)=>{
        res.json(facilities)
    }).catch((err)=>{
        console.log(err)
    })
  })

module.exports = {
    addFacility,
    viewFacilities

}
