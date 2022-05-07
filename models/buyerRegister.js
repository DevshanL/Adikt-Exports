const uuid = require('uuid');
const mongoose = require ('mongoose');
const buyerRegisterSchema = new mongoose.Schema({

    BuyerID:{
        type:String,
        default: uuid.v4(),
    },

    Name:{
        type:String,
        //default: uuid.v4(),
        required: true
    },
    NIC:{
        type:String,
        required: true
    },
   
    
    Address:{
        type:String,
        required:true

    },
    Email:{
        type:String,
        required:true
    },

    ContactNumber:{
        type:String,
        required:true
    
    }
});

module.exports= mongoose.model('BuyerRegisterDB', buyerRegisterSchema);