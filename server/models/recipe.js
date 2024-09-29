const mongoose = require('mongoose');
const recipeSchema = mongoose.Schema({
    name : {type : String , unique : true},
    type : {type : String},
    specialtype : {type : String},
    price : {type : Number},
    image : {type : String},
    package : {type : String}
})
const Recipe = mongoose.model('Recipes',recipeSchema);
module.exports = Recipe; 