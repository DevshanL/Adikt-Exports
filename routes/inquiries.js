const express =require('express');
const res = require('express/lib/response');
const Inquiries =require('../models/inquiriesModel');

const router =express.Router();

//Save Inquiries
router.post('/inq/save', (req,res) => {
    let newInquiry =new Inquiries(req.body);
    newInquiry.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Inquiries saved successfully"
        });
    });
});

//Get Inquiries
router.get('/inquiries' , (req,res) => {
    Inquiries.find().exec((err,inquiries) =>{
        if (err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingInquiries:inquiries
        });
    });
});

//Get a specific inquiry
router.get('/inquiry/:id', (req,res)=> {
    let inquiryID =req.params.id;
    Inquiries.findById(inquiryID, (err,inquiry)=>{
        if (err) {
            return res.status(400).json({
                success:false,
                err
            })
        }
        return res.status(200).json({
            success:true,
            inquiry
        })
    });
});

//Update Inquiry
router.put('/inquiry/update/:id', (req,res) =>{
    Inquiries.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },
    (err,inquiry)=>{
        if (err) {
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Updated Successfully"
        });
    }
    );
});

//Delete Inquiries
router.delete('/inquiry/delete/:id', (req,res)=>{
    Inquiries.findByIdAndRemove(req.params.id).exec((err,deletedInquiry)=>{
        if(err){
            return res.status(400).json({
                message:"Delete Failed",err
            })
        }
        return res.status(200).json({
            message:"Delete successful", deletedInquiry
        });
    });
});

module.exports =router;