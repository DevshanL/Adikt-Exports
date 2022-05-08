const uuid = require('uuid');
const mongoose = require ('mongoose');
const exportDetailsSchema = new mongoose.Schema({

    ShipmentID:{
        type:String,
        default: uuid.v4(),
    },
    ProductID:{
        type:String,
        required: true
    },
   
    Date:{
        type:String,
        required:true
    },
    UnitPrice:{
        type:String,
        required:true

    },
    Qty:{
        type:Number,
        required:true
    },

    Type:{
        type:String,
        required:true
    
    },
    Description:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('ExportDetailsDB', exportDetailsSchema);