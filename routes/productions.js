const express = require('express');

const Productions = require('../models/production');

const router = express.Router();

//save material
router.post('/production/save', (req,res) =>{

    let newProduction = new Productions(req.body);

    newProduction.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Product slot saved successfully"
        });
    });
});


//getpost
router.get('/production',(req,res) =>{
    Productions.find().exec((err,production) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:production
        });
    });
});

//get a spesific post
router.get('/production/:id',(req,res) =>{
    let productionid =req.params.id;

    Productions.findById(productionid,(err,production) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            production
        });

    });
});

//update posts
router.put('/production/updateproduction/:id',(req,res)=>{
    Productions.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,production)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success:"Update Succesfully"
            });
        }
    )
});


//delete post

router.delete('/production/deleteproduction/:id',(req,res) =>{
    Productions.findByIdAndRemove(req.params.id).exec((err,deleteproduction) =>{
        
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteproduction
        });

    });
});

module.exports = router;
