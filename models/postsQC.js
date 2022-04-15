const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

    OrderID:{
        type:String,
        required:true
    },
    BuyerID:{
        type:String,
        required:true
    },
    QualityRate:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model('postsQC',postSchema);