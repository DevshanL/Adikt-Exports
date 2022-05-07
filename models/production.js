const mongoose = require('mongoose');

const productionSchema = new mongoose.Schema({


    

    slotName:{
        type:String,
        required:true
    },

    slotLocation:{
        type:String,
        required:true
    },

    slotManager:{
        type:String,
        required:true
    },
    
    capacity:{
        type:Number,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Productiondb',productionSchema)