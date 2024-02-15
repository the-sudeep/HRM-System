const mongoose = require('mongoose');

const hrSchema = new mongoose.Schema({
    full_name : {
        type : String, 
        required : true,
    },
    username : {
        type : String, 
        required : true,
    },
    email : {
        type : String, 
        required : true,
        unique : true,
    },
    password : {
        type : String, 
        required : true,
    },
});

const HR = mongoose.model('HR', hrSchema);

module.exports = HR;