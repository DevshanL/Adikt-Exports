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

module.exports = router;
