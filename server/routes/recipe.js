const Recipe = require('../models/recipe')
const express = require('express');
const route = express.Router();
const multer = require('multer')
const path = require('path')
route.get('/showrecipes' , async(req,res)=>{
    try{
        const data = await Recipe.find();
        res.status(201).json({message : "fetched recipes succesfully" , data : data})
    }catch(err){
        res.status(500).json({message : err.message})
    }
})
const storage = multer.diskStorage({
    destination : function(req , file , cb){
        return cb(null ,'public/images')
      },
    filename : function(req, file , cd){
        return cd(null , file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const uploadimage = multer({storage})
route.post('/addnewrecipe' , uploadimage.single("file"), async(req,res)=>{
   try{
    console.log(req.file);
    
    if (!req.file) {
        return res.status(400).json({ message: "Image is required" });
    }
    const {name , type , specialtype , package , price}= req.body;
    // console.log("reqbody" ,req.body)
    const image = req.file.filename;
    console.log(image)
    if(!name || !type || !image || !price){
        res.status(400).json({message : "all fields are required"})
    }
     const newrecipe = new Recipe({
        name : name ,
        type : type,
        specialtype : specialtype,
        package : package,
        price : price,
        image :  `/images/${req.file.filename}`
     })
     const recipedata = await newrecipe.save();
     res.status(201).json({message : "recipe stored successfully" , data: recipedata} )
   }catch(err){
    res.status(500).json({message : err.message})
   }

})

module.exports = route;