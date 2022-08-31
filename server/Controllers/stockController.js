const asyncHandler = require('express-async-handler')

//import mongoose model

const Stock = require('../Models/stockModel')

const addStock = asyncHandler(async (req, res) => {


    const itemCode = req.body.itemCode;
    const brand = req.body.brand;
    const country = req.body.country;
    const dealerName = req.body.dealerName;
    const sparePart = req.body.sparePart;
    const price = Number(req.body.price);

    const newStock = new Stock({

       itemCode,
       brand,
       country,
       dealerName,
       sparePart,
       price
    })

    newStock.save().then(()=>{
        res.json("Stock Added successfully !")
    }).catch((err)=>{
        console.log(err);
    })


})

module.exports = {
    addStock
}