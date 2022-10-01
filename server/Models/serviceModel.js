const mongoose = require('mongoose');
const Schema = mongoose.Schema

const serviceSchema =  new Schema({
    vNo:{
        type:String,
        required:[true, 'Vehicle Number is Required']
    },

    cusName:{
        type:String,
        required:[true, 'Customer Name is Required']
    },

    entryDate:{
        type:String,
        required:[true, 'Entry Date is Required']
    },

    handoverDate:{
        type:String,
        required:[true, 'Handover Date is Required']
    },

    description:{
        type:String,
    },

    totalCost:{
        type:Number,
        required:[true, 'Handover Date is Required']
    },
})

const Service = mongoose.model("Service",serviceSchema);

module.exports = Service;