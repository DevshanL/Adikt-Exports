const mongoose = require ('mongoose');

const postedSchema = new mongoose.Schema({

    ProductID:{
        type:String,
        required: true
    },
    ProductName:{
        type:String,
        required:true
    },
    ShipmentID:{
        type:String,
        required:true
    
    },
    Date:{
        type:String,
        required:true
    },
    UnitPrice:{
        type:Number,
        required:true

    },
    Qty:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:true
    }



});

module.exports= mongoose.model('PostedDB', postedSchema);