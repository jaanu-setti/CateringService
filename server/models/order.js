const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    itemname : {type : String},
    itemtype : {type : String}
})
const orderSchema = mongoose.Schema({
    totalprice : {type : Number},
    address : {type : String},
    event : {type : String},
    phone : {type : String},
    name  : {type : String},
    plates : {type : Number},
    date : {type : String},
    recipes : [recipeSchema]
})
const order = mongoose.model('orders' , orderSchema);
module.exports = order;