const express = require('express');

const Posteds = require('../models/posted');

const router = express.Router();

//save posts
router.post('/posted/save', (req,res)=>{
    let newPosted = new Posteds(req.body);

    newPosted.save((err) =>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });

    });

});


//get posts

router.get('/posted',(req,res) =>{
    Posteds.find().exec((err,posted)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posted
        });

    });
});


//get a specific post

router.get("/posted/:id",(req,res)=>{
    
    let postedid = req.params.id;

    Posteds.findById(postedid,(err,posted) =>{
        if(err) {
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success: true,
            posted
        });
    });
});




//update post

router.put('/posted/update/:id', (req,res)=>{
    Posteds.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
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

router.delete('/posted/delete/:id', (req,res)=>{
    Posteds.findByIdAndRemove(req.params.id).exec((err,deleteposted)=>{
        if(err) return res.status(400).json({
                message:"Delete unsuccesfull", err
        
        });

        return res.json({
            message:"Delete Succesfull", deleteposted
        });

    });
});


module.exports = router;

