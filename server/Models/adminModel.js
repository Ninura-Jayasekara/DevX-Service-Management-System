const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({

    id: {
        type: Number,
        required: [true, 'ID is required !']
    },

    firstName: {
        type: String,
        required: [true, 'First name is required !']
    },

    lastName: {
        type: String,
        required: [false]
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    }


})

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

