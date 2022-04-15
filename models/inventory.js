const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({


    

    cusID:{
        type:String,
        required:true
    },

    proName:{
        type:String,
        required:true
    },

    stockedDate:{
        type:String,
        required:true
    },
    
    scheduledDate:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    qty:{
        type:Number,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    description:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Inventorydb',inventorySchema)