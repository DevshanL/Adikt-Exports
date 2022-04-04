//Customer Requests Model

const mongoose =require('mongoose');

const requestSchema =new mongoose.Schema({

    requestID:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true
    },

    customerName:{
        type:String,
        required:true
    },

    c_address:{
        type:String,
        required:true
    },

    c_email:{
        type:String,
        required:true
    },

    c_ContactNo:{
        type:String,
        required:true
    },

    //best time to contact
    c_btc_from:{
        type:String,
        required:true
    },

    c_btc_to:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    productName:{
        type:String,
        required:true
    },

    netWeight:{
        type:Number,
        required:true
    },

    packageQty:{
        type:Number,
        required:true
    },

    arrangedDate:{
        type:Date,
        required:true
    }

});

module.exports =mongoose.model('Requestsdbs' ,requestSchema);