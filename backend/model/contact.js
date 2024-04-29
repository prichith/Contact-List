const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    phone : {type : String, required : true},
    place : {type : String, required : true}
})

const List = mongoose.model("lists", listSchema);

module.exports = List;