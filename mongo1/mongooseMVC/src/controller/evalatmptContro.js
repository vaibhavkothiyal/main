const express=require('express');
const EvalAtmpt=require('../models/evalatmptModel');

const router=express.Router();


router.post('',async(req,res)=>{
    try{
        const evalAtmpt=await EvalAtmpt.create(req.body);
        res.status(201).send(evalAtmpt);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

module.exports=router;