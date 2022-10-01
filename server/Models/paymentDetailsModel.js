const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentDetailSchema = new Schema({

    customerName: {
        type: String,
        required: [true, 'Name is required']
    },

    vehicleNumber: {
        type: String,
        required: [true, 'Vehicle Number is required']
    },

    serviceDate: {
        type: String,
        required: [true, 'Service Date is required']
    },

    amount: {
        type: Number,
        required: [true, 'Amount is required']
    }

})

const PaymentDetails = mongoose.model("PaymentDetails" ,paymentDetailSchema)
module.exports = PaymentDetails;