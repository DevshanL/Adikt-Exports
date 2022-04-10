const mongoose =require('mongoose');

const inquirySchema =new mongoose.Schema({
    description:{
        type:String,
        required:true}
   
});

module.exports =mongoose.model('inquiriesdbs' ,inquirySchema);