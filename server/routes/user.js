const express = require ('express');
const route = express.Router();
const User = require('../models/user')
route.post('/signup' , async(req,res)=>{
  try{
    const {name , email , phone , state , district , password , confirmpassword}=req.body;
    if(name===''||email===''||phone===''||state===''||district===''||password===''||confirmpassword===''){
        res.status(401).json({message : 'some of the required fields are empty'})
    }
    const userdetails = await User.create({
      name,
      email,
      phone,
      state,
      district,
      password,
      confirmpassword
    })
    res.status(201).json({message : 'user data stored successfully' , data : userdetails})

  }catch(err){
    res.status(500).json({message : err.message})
  }
})
module.exports = route;