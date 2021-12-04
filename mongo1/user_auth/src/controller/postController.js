const express=require('express');
const Post=require('../models/postModel');
const User=require('../models/userModel');
const Token=require('../models/tokenModel');

const router = express.Router();

router.post("/",async(req,res)=>{
    try{
        const user=await User.findById(req.body.user_id);
        if(!user) return res.status(400).json({error:"user not found"});

        const post=await Post.create(req.body);
        res.status(201).json(post);
    }catch(e){
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.post("/:email",async (req,res)=>{
    try{
        const user=await User.findOne({email:req.params.email});
        if(!user) return res.status(400).json({error:"incorrect user name or password"});
        let usertoken=await Token.findOne({user_id:user._id});
        usertoken=usertoken.token;
        if(!usertoken) return res.status(400).json({error:"no token found ACCESS DENIED"});
        const post=await Post.find({user_id:user._id},{title:1,body:1});
        res.status(200).json(post);
    }catch(e){
        res.status(500).json({ message: e.message, status: "Failed" });
    }
})

module.exports = router;