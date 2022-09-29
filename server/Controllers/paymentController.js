const asyncHandler = require('express-async-handler')

//import mongoose model

const Card = require('../Models/paymentCardDetailsModel')
const Payment = require('../Models/paymentDetailsModel')


const addCard = asyncHandler(async (req, res) => {


    const userName = req.body.userName;
    const cardNumber = req.body.cardNumber;
    const expDate = req.body.expDate;
    const cvc = req.body.cvc;
    const cardType = req.body.cardType;
    const amount = Number(req.body.amount);

    const newCard = new Card({

       userName,
       cardNumber,
       expDate,
       cvc,
       cardType,
       amount
    })

    newCard.save().then(()=>{
        res.json("Card Added successfully !")
    }).catch((err)=>{
        console.log(err);
    })
})


const addPayment = asyncHandler(async (req, res) => {


    const customerName = req.body.customerName;
    const vehicleNumber = req.body.vehicleNumber;
    const serviceDate = req.body.serviceDate;
    const amount = Number(req.body.amount);

    const newPayment = new Payment({

       customerName,
       vehicleNumber,
       serviceDate,
       amount
    })

    newPayment.save().then(()=>{
        res.json("Payment Added successfully !")
    }).catch((err)=>{
        console.log(err);
    })
})


const fetchAllPayments = asyncHandler(async(req, res)=>{

    Payment.find().then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err)
    })
 })


module.exports = {
    addCard,
    addPayment,
    fetchAllPayments
}