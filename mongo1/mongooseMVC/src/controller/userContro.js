const express=require('express');
const User=require('../models/userModel');

const router=express.Router();
router.post('',async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(201).send(user);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

router.get('',async(req,res)=>{
    try{
        const user=await User.find().lean().exec();
        res.send(user);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id).lean().exec();
        res.send(user);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.send(user);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id).lean().exec();
        res.send(user);
    }
    catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})


module.exports=router;