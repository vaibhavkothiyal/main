const express=require('express');
const Show=require('../models/showModel');
const authenticate=require('../middleware/authenticate');
const Screen=require('../models/screenModel');
const Theatre=require('../models/theatreModel');


const router=express.Router();


router.post("/",async (req,res)=>{
    try{
        const show=await Show.create(req.body);
        return res.status(200).json(show);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/",async (req,res)=>{
    try{
        const show=await Show.find().lean().exec();
        return res.status(200).json(show);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/:id",async (req,res)=>{
    try{
        const show=await Show.find({movie:req.params.id}).lean().exec();
        // const show=await Show.find({movie:req.params.id}).populate("movie").lean().exec();
        return res.status(200).json(show);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/seats/:id",async (req,res)=>{
    try{
        const show=await Show.findById(req.params.id).lean().exec();
        return res.status(200).json(show.total_seats);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/nearest/:id",authenticate,async (req,res)=>{
    try{
        const user=req.user
        const show=await Show.find({movie:req.params.id}).lean().exec();
        const location=user.user.location;
        const showLoc=[];
        show.forEach(async el=>{
            const screen=await Screen.findById(el.screen).lean().exec();
            const thtr=await Theatre.findById(screen.threatre).lean().exec();
            if (thtr.location==location){
                return res.status(200).json(thtr);
            }
        })
        console.log(showLoc);
        // return res.status(200).json(show);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports=router;