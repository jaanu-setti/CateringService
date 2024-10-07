const express = require('express');
const route = express.Router();
const Order = require('../models/order');
route.post('/order' , async(req,res)=>{
   const {itemname , type , totalprice , address , event , phone , customername} = req.body
   try{
    if(!itemname || !type || !totalprice || !address || !event || !phone || !customername){
        res.status(401).json({message : 'all fields are required'})
        return
    }
    const orderplaced = await Order.create({
        itemname ,
        type,
        address,
        totalprice,
        event,
        phone,
        customername
    })
    res.status(201).json({message : "order has been placed successfully" , data : orderplaced})
    return;
   }catch(err){
    res.status(500).json({message : err.message})
    return;
   }
})
module.exports = route;