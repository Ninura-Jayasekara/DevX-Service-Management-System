const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({

    itemCode: {
        type: String,
        required: [true, 'Item Code is required']
    },

    brand: {
        type: String,
        required: [true, 'Brand is required']
    },

    country: {
        type: String,
        required: [true, 'Country is required']
    },

    dealerName: {
        type: String,
        required: [true, 'Dealers Name is required']
    },

    sparePart: {
        type: String,
        required: [true, 'Spare Part is required']
    },

    price: {
        type: String,
        required: [true, 'Price is required']
    }

})

const Stock = mongoose.model("Stock" ,stockSchema)

module.exports = Stock;