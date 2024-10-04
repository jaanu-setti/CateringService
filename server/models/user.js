const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name : {type : String , required : true},
    email : {type : String , required : true , unique : true},
    phone : {type : Number , required : true},
    state : {type : String , required : true},
    district : {type : String , required : true},
    password : {type : String , required : true},
    confirmpassword : {type : String , required : true},
})
const user = mongoose.model('User' , userSchema);
module.exports = user;