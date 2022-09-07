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

//fetch by item code or spare part name

const fetchPart = asyncHandler(async(req, res)=>{
    let q = req.query.q;
    let filter = [];
  
      filter.push(...[{itemCode:q},{sparePart:q}])
  
    console.log(filter)
  
    Stock.findOne({$or: filter} )
    .then((stocks)=>{
        console.log(stocks)
        res.status(200).send({status: "Spare part fetched successfully !",stocks});
    
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with fetching...", error: err.message});
    })
  })

  const fetchAllParts = asyncHandler(async(req, res)=>{

        Stock.find().then((stocks)=>{
            res.json(stocks)
        }).catch((err)=>{
            console.log(err)
        })
    })

module.exports = {
    addStock,
    fetchPart,
    fetchAllParts
}