const express=require('express');
const UserGallery=require('../models/usergalleryModel');
const router=express.Router();
const upload=require('../middlewares/upload');


router.post("/",upload.any("userImages"),async (req,res)=>{
    const images=req.files.map((el)=>el.path);
    try{
        const userGallery=await UserGallery.create({
            emp_id:req.body.emp_id,
            pictures:images
        })
        res.status(200).send(userGallery);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

router.post('/multiple',upload.array("userImages",5), async(req,res)=>{
    var images=req.files.map((el)=>el.path);
    try{
        const userGallery=await UserGallery.create({
            emp_id:req.body.emp_id,
            pictures:images
        });
        res.status(201).send(userGallery);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
});

const fs=require('fs');

router.delete('/:id', async(req,res)=>{
    try{
        const userGallery=await UserGallery.findById(req.params.id).lean().exec();
        userGallery.pictures.forEach( async (el)=>{
            console.log(el);
            await fs.unlink(`${el}`, (err => {
            if (err) console.log(err);
            else {
              console.log("Deleted file");
            }
          }));
        });
        res.status(201).send(userGallery);
    }catch(e){
        res.status(500).json({message:e.message,status:"Failed"});
    }
})

module.exports=router;