const express = require('express');
const transportModel = require('../models/transportModel');


const router = express.Router();

//save details

router.post('/transport/save',(req,res)=>{

    let newPost = new transportModel(req.body);

    newPost.save((err)=>{
        if(err){return res.status(400).json({
            error: err
            });
        }
        return res.status(200).json({
            success: "TR Details Saved Successfully"
        });
    });
});


//get a spesific post

router.get("/transport/:id", (req, res) => {

    let transportId = req.params.id;
  
    transportModel.findById(transportId,(err,transport)=>{
          if(err){
          return res.status(400).json({success:false,err});
    }
          return res.status(200).json({
              success:true,
              transport
          });
      });
  });
  

//get details

router.get("/transport/:id", (req, res) => {

    let transportId = req.params.id;
  
    transportModel.findById(transportId,(err,transport)=>{
          if(err){
          return res.status(400).json({success:false,err});
    }
          return res.status(200).json({
              success:true,
              transport
          });
      });
  });

  //getpost
router.get('/transport',(req,res) =>{
    transportModel.find().exec((err,transport) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:transport
        });
    });
});
  
  //update

router.put('/transport/update/:id',(req,res) =>{
    transportModel.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(err,transport)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"TR Details Updated Succeesfully"
        });
    });
});

//delete

router.delete('/transport/delete/:id',(req,res)=>{
    transportModel.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if (err) return res.status(400).json({
            message: "Delete Unsuccesfull",err
        })

        return res.json({
            message: "TR Details Delete Succesfull",deletedPost
        });
    });
});


module.exports = router;