const express = require('express');
const postsQC = require('../models/postsQC');


const router = express.Router();

//save details

router.post('/post/save',(req,res)=>{

    let newPost = new postsQC(req.body);

    newPost.save((err)=>{
        if(err){return res.status(400).json({
            error: err
            });
        }
        return res.status(200).json({
            success: "Posts saved successfully"
        });
    });
});


//get details

router.get("/post/:id", (req, res) => {

    let postId = req.params.id;
  
    postsQC.findById(postId,(err,post)=>{
          if(err){
          return res.status(400).json({success:false,err});
    }
          return res.status(200).json({
              success:true,
              post
          });
      });
  });

  //getpost
router.get('/post',(req,res) =>{
    postsQC.find().exec((err,post) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:post
        });
    });
});
  
  //update

router.put('/post/update/:id',(req,res) =>{
    postsQC.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(err,post)=>{
        if(err){
            return res.status(400).json({error:err});
        }
        return res.status(200).json({
            success:"Updated Succeesfully"
        });
    });
});

//delete

router.delete('/post/delete/:id',(req,res)=>{
    postsQC.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if (err) return res.status(400).json({
            message: "Delete Unsuccesfull",err
        })

        return res.json({
            message: "Delete Succesfull",deletedPost
        });
    });
});


module.exports = router;