const express=require('express');
const Evalution=require('../models/evalutionModel');

const router=express.Router();

router.post('',async(req,res)=>{
    try{
        const evalution=await Evalution.create(req.body);
        res.status(201).send(evalution);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

module.exports=router;