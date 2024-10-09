const express = require('express');
const route = express.Router();
const Order = require('../models/order');
route.post('/placeorder' , async(req,res)=>{
   const { totalprice , address , event , phone , name ,recipes} = req.body
   try{
    console.log(req.body)
    if( !totalprice || !address || !event || !phone || !name || !recipes){
        res.status(400).json({message : 'all fields are required'})
        return
    }
    const orderplaced = await Order.create({
        totalprice,
        address,
        event,
        phone,
        name,
        recipes: recipes.map(recipe => ({
            itemname: recipe.itemname,
            itemtype: recipe.itemtype
        }))
    });
    res.status(201).json({message : "order has been placed successfully" , data : orderplaced})
    return;
   }catch(err){
    res.status(500).json({message : err.message})
    return;
   }
})
module.exports = route;