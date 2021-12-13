const express=require('express');
const Seat=require('../models/seatModel');

const router=express.Router();


router.post("/",async (req,res)=>{
    try{
        const product=await Seat.create(req.body);
        return res.status(200).json(product);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports=router;