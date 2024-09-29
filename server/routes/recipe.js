const Recipe = require('../models/recipe')
const express = require('express');
const route = express.Router();
route.get('/showrecipes' , async(req,res)=>{
    try{
        const data = await Recipe.find();
        res.status(201).json({message : "fetched recipes succesfully" , data : data})
    }catch(err){
        res.status(500).json({message : err.message})
    }
})
module.exports = route;