const express =require ('express');
const Requests =require('../models/requestsModel');

const router =express.Router();

//Save requests
router.post('/request/save', (req,res) => {
    let newRequest =new Requests(req.body);
    newRequest.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"requests saved successfully"
        });
    });
});

//get requests
router.get('/requests' ,(req,res) =>{
    Requests.find().exec((err,requests) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRequests:requests
        });
    });
});

//get a specific request
router.get('/request/:id',(req,res)=>{
    let requestId =req.params.id;
    Requests.findById(requestId, (err,request) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }
        return res.status(200).json({success:true, request})
    });
});


//update requests
router.put('/request/update/:id' ,(req,res) =>{
    Requests.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,request)=>{
            if (err) {
                return res.status(400).json({
                    error:err
                })
            }
            return res.status(200).json({
                success:"Updated Successfully!!!"
            });
        }
    );
});

//Delete requests
router.delete('/request/delete/:id',(req,res)=>{
    Requests.findByIdAndRemove(req.params.id).exec((err,deletedRequest) =>{
        if (err) {
            return res.status(400).json({
                message:"Delete unsuccessful",err
            });
        }
        return res.status(200).json({
            message:"Delete successful",deletedRequest
        });
    });
});

module.exports =router;