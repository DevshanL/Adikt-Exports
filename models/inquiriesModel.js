//Customer Inquiries Model

const mongoose =require('mongoose');

const inquirySchema =new mongoose.Schema({

    inquiryID:{
        type:String,
        required:true},

    date:{
        type:Date,
        required:true},
    
    customerName:{
        type:String,
        required:true},
    
    contactNo:{
        type:String,
        required:true},
    
    email:{
        type:String,
        required:true},

    inquiryType:{
        type:String,
        required:true},
    
    description:{
        type:String,
        required:true},
   
});

module.exports =mongoose.model('Inquiriesdbs' ,inquirySchema);