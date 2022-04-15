const express = require('express');

const Inventories = require('../models/inventory');

const router = express.Router();

//save material
router.post('/inventory/save', (req,res) =>{

    let newInventory = new Inventories(req.body);

    newInventory.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Product saved successfully"
        });
    });
});


//getpost
router.get('/inventory',(req,res) =>{
    Inventories.find().exec((err,inventory) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:inventory
        });
    });
});

//get a spesific post
router.get('/inventory/:id',(req,res) =>{
    let inventoryid =req.params.id;

    Inventories.findById(inventoryid,(err,inventory) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            inventory
        });

    });
});

//update posts
router.put('/inventory/updateinventory/:id',(req,res)=>{
    Inventories.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,inventory)=>{
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

router.delete('/inventory/deleteinventory/:id',(req,res) =>{
    Inventories.findByIdAndRemove(req.params.id).exec((err,deleteinventory) =>{
        
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        });

        return res.json({
            message:"Delete Succesfull",deleteinventory
        });

    });
});

module.exports = router;
