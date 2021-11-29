const express=require('express');
const Topic=require('../models/topicModel');

const router=express.Router();
router.post('',async(req,res)=>{
    try{
        const topic=await Topic.create(req.body);
        res.status(201).send(topic);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

router.get('',async(req,res)=>{
    try{
        const topic=await Topic.find().lean().exec();
        res.status(201).send(topic);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

module.exports=router;