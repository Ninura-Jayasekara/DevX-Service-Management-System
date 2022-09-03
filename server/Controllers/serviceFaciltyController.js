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

const viewFacilities = asyncHandler((req, res)=>{
    Facility.find().then((facilities)=>{
        res.json(facilities)
    }).catch((err)=>{
        console.log(err)
    })
})

const updateFacility = asyncHandler(async (req, res) => {

    let fId = req.params.fid;
    
    const{facilityName,
        facilityCost}=req.body;
 
    const updateFacility = {
        facilityName,
        facilityCost
    }
 
    const update =  await Facility.findByIdAndUpdate(fId,updateFacility).then(()=>{
        res.status(200).send({status: "Facility Cost Updated!"})

    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: "Error with updating data...", error: err.message})
    })


})


module.exports = {
    addFacility,
    viewFacilities,
    updateFacility

}
