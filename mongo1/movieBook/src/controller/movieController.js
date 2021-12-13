const express=require('express');
const Movie=require('../models/movieModel');
const authenticate=require('../middleware/authenticate');

const router=express.Router();


router.post("/",authenticate, async (req,res)=>{
    try{
        const user=req.user
        const product=await Movie.create({
            name:req.body.name,
            actors:req.body.actors,
            languages:req.body.languages,
            directors:req.body.directors,
            poster_url:req.body.poster_url,
        });
        return res.status(200).json(product);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/actor/:id",async (req,res)=>{
    try{
        const found=[];
        const movies=await Movie.find().lean().exec();
        movies.forEach(el1 => {
            let actor=el1.actors;
            actor.forEach(el2 => {
                if(req.params.id==el2){
                    found.push(el1);
                }
            });
        });
        return res.status(200).json(found);
    }catch(e){
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports=router;