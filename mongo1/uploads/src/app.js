const express=require('express');
const connect=require('./configs/db');

const companyController=require('./controller/companyContro');
const userGalleryController=require('./controller/usergalleryContro');

const app=express();
app.use(express.json());

app.use('/companies',companyController);
app.use('/userGallery',userGalleryController);

app.listen(2348,async ()=>{
    await connect();
    console.log("testing express vaibhav");
})
