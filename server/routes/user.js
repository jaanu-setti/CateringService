const express = require ('express');
const route = express.Router();
const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validate = require('validator');
route.post('/signup' , async(req,res)=>{
  try{
    const {name , email , phone , state , district , password , confirmpassword}=req.body;
    console.log(req.body)
    if (!name || !email || !phone || !state || !district || !password || !confirmpassword) {
        console.log('Some of the required fields are empty' )
        return res.status(401).json({ message: 'Some of the required fields are empty' });
      }
    const existinguser = await User.findOne({email});
    if(existinguser){
       return res.status(403).json({message : 'user already esists with given email id'})
    }
    if(!validate.isEmail(email)){
        return  res.status(400).json({message : "email should be valid "})
    }
    if(password!==confirmpassword){
        return  res.status(400).json({message : "password and confirm password should be same"})
    }
    const hashedpassword =await bcrypt.hash(password,10)
    const userdetails = await User.create({
      name,
      email,
      phone,
      state,
      district,
      password : hashedpassword,
      confirmpassword 
    })
    console.log('data : ' ,userdetails)
    return res.status(201).json({message : 'user data stored successfully' , data : userdetails})

  }catch(err){
    return res.status(500).json({message : err.message})
  }
})

route.post('/login',async(req,res)=>{
 try{
  const {email , password} = req.body;
  const logindata = await User.findOne({email});
  if(!logindata){
    res.status(401).json({message : 'no user is registered with the given email'});
    return;
  }
  const passwordmatch = await bcrypt.compare(password,logindata.password);
  if(!passwordmatch){
    return res.status(400).json({message : 'incorrect password'})
  }
  const token = await jwt.sign({name : logindata.name , email : logindata.email} , 'secret_key' , {expiresIn : '1hr'});
  return res.json({token});
 }catch(err){
  res.status(500).json({message :err.message})
 }
})
module.exports = route;