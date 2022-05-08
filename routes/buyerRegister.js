const express = require('express');

const BuyerRegister = require('../models/buyerRegister');

const router = express.Router();

//save posts
router.post('/buyer-register/save', (req,res)=>{
    //console.log(req)
    let NewBuyerRegister = new BuyerRegister(req.body);

    NewBuyerRegister.save((err) =>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Buyer Registration  saved successfully"
        });

    });

});


//get posts

router.get('/buyer-register',(req,res) =>{
    BuyerRegister.find().exec((err,buyerRegister)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingBuyerRegister:buyerRegister
        });

    });
});


//get a specific post

router.get("/buyer-register/:id",(req,res)=>{
    
    let buyerRegisterId = req.params.id;

    BuyerRegister.findById(buyerRegisterId,(err,buyerRegister) =>{
        if(err) {
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success: true,
            buyerRegister: buyerRegister
        });
    });
});


router.put('/buyer-register/update/:id', (req,res)=>{
    const {body} = req;
    BuyerRegister.findByIdAndUpdate(
        req.params.id,
        {
            $set:{
                BuyerID:body.BuyerID,
                Name:body.Name,
                NIC:body.NIC,
                Country:body.Country,
                Address:body.Address,
                Email:body.Email,
                ContactNumber:body.ContactNumber,
                


            }
        },
        (err,posted)=>{
            if(err){
                return res.status(400).json({error:err});

            }

            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete post

router.delete('/buyer-register/delete/:id', (req,res)=>{
    BuyerRegister.findByIdAndRemove(req.params.id).exec((err,deleteBuyerRegister)=>{
        if(err) return res.status(400).json({
                message:"Delete unsuccesfull", err
        
        });

        return res.json({
            success:"Delete Succesfull", deleteBuyerRegister: deleteBuyerRegister
            
        });

    });
});


module.exports = router;

