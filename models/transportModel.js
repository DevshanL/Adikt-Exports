const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

    TransportID:{
        type:String,
        required:true
    },
    VehicleID:{
        type:String,
        required:true
    },
    VehicleType:{
        type:String,
        required:true
    },
    Destination:{
        type:String,
        required:true
    },
    TransportDate:{
        type:String,
        required:true
    },
    ShipmentID:{
        type:String,
        required:true
    }
   
})

module.exports = mongoose.model('transportModel',postSchema);