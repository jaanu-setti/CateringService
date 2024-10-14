const express = require('express');
const route = express.Router();
const Order = require('../models/order');
route.post('/placeorder' , async(req,res)=>{
   const { totalprice , address , event , phone , name ,plates, date, recipes} = req.body
   try{
    console.log(req.body)
    if( !totalprice || !address || !event || !phone || !name || !plates ||!date || !recipes){
        res.status(400).json({message : 'all fields are required'})
        return
    }
    const orderplaced = await Order.create({
        totalprice,
        address,
        event,
        phone,
        name,
        plates,
        date,
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
route.get('/getorders' , async(req,res)=>{
    const orderdetails = await Order.find();
    res.status(201).json({message : 'getting orders' , data : orderdetails})
})
route.delete('/deleteorder' , async(req,res)=>{
   try{
    const {_id} = req.body;
    const orderdelete = await Order.findByIdAndDelete(_id);
    if(orderdelete){
       return res.status(201).json({message : 'order deleted successfully'})
    }
    else{
        return res.status(401).json({message : "order not found"})
    }
   }catch(error){
      return   res.status(500).json({ message: 'Error deleting order', error });
   }
})
module.exports = route;