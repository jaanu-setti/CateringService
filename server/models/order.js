const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    itemname : {type : String},
    type : {type : String},
    totalprice : {type : Number},
    address : {type : String},
    event : {type : String},
    phone : {type : Number},
    customername  : {type : String}
})
const order = mongoose.model('orders' , orderSchema);
module.exports = order;