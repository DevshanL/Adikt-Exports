const express = require('express');

const ExportDetails = require('../models/exportDetails');

const router = express.Router();

//save posts
router.post('/export-details/save', (req,res)=>{
    //console.log(req)
    let newExportDetails = new ExportDetails(req.body);

    newExportDetails.save((err) =>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Export Details are saved successfully"
        });

    });

});


//get posts

router.get('/export-details',(req,res) =>{
    ExportDetails.find().exec((err,exportDetails)=>{
        if (err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingExportDetails:exportDetails
        });

    });
});


//get a specific post

router.get("/export-details/:id",(req,res)=>{
    
    let exportDetailsId = req.params.id;

    ExportDetails.findById(exportDetailsId,(err,exportDetails) =>{
        if(err) {
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success: true,
            exportDetails: exportDetails
        });
    });
});


router.put('/export-details/update/:id', (req,res)=>{
    const {body} = req;
    ExportDetails.findByIdAndUpdate(
        req.params.id,
        {
            $set:{
                
                ShipmentID:body.ShipmentID,
                ProductID:body.ProductID,
                Date:body.Date,
                UnitPrice:body.UnitPrice,
                Qty:body.Qty,
                Type:body.Type,
                Description:body.Type


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

router.delete('/export-details/delete/:id', (req,res)=>{
    ExportDetails.findByIdAndRemove(req.params.id).exec((err,deleteExportDetails)=>{
        if(err) return res.status(400).json({
                message:"Delete unsuccesfull", err
        
        });

        return res.json({
            success:"Delete Succesfull", deleteExportDetails: deleteExportDetails
            
        });

    });
});


module.exports = router;

