const mongoose = require('mongoose');
const Schema = mongoose.Schema

const facilitySchema =  new Schema({

    facilityName:{
        type:String,
        required:[true, 'Facility Name is Required']
    },

    facilityCost:{
        type:Number,
        required:[true, 'Facility Cost is Required']
        
    }
})

const Facility = mongoose.model("Facility",facilitySchema);

module.exports = Facility;