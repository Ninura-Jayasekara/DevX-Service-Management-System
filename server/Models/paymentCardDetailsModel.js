const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardDetailSchema = new Schema({

    userName: {
        type: String,
        required: [true, 'Name is required']
    },

    cardNumber: {
        type: String,
        required: [true, 'Card Number is required']
    },

    expDate: {
        type: String,
        required: [true, 'Expiry Date is required']
    },

    cvc: {
        type: String,
        required: [true, 'CVC number is required']
    },

    cardType: {
        type: String,
        required: [true]
    },

    amount: {
        type: Number,
        required: [true, 'Amount is required']
    }

})

const CardDetails = mongoose.model("CardDetails" ,cardDetailSchema)

module.exports = CardDetails;