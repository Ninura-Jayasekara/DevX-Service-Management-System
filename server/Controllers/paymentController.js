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

    const serviceId = req.body.serviceId;
    const customerName = req.body.customerName;
    const vehicleNumber = req.body.vehicleNumber;
    const serviceDate = req.body.serviceDate;
    const amount = Number(req.body.amount);

    const newPayment = new Payment({

    
        serviceId,
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

const searchPayment = asyncHandler(async(req, res)=>{
    let serviceId = req.params.serviceId;
    const getPayment = await Payment.find({serviceId})
    .then((count)=>{
        res.status(200).send({status: "Payment fetched",count});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get payment", error: err.message});
    })
})

const updatePayment = asyncHandler(async (req, res) => {
    let serviceId = req.params.serviceId;
    const { amount } = req.body;
  
    const updateAmount = {
      amount,
    };
  
    const update = await Payment.findOneAndUpdate({ serviceId }, updateAmount)
      .then(() => {
        res.status(200).send({ status: "Price updated !" });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ status: "Error with updating price", error: err.message });
      });
  });
  
  const deletePayment = asyncHandler(async (req, res) => {
    let serviceId = req.params.serviceId;
  
    const Delete = await Payment.findOneAndDelete({ serviceId })
      .then(() => {
        res.status(200).send({ status: "Payment Deleted!" });
      })
      .catch((err) => {
        console.log(err.message);
        res
          .status(500)
          .send({ status: "Error with delete payment!", error: err.message });
      });
  });
module.exports = {
    addCard,
    addPayment,
    fetchAllPayments,
    searchPayment,
    updatePayment,
    deletePayment
}