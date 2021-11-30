const express = require('express');
const connect=require('./configs/db');



const userController=require('./controller/userConto');
const adminController=require('./controller/adminsContro');


const app=express();
app.use(express.json());


app.use('/users',userController);
app.use('/admins',adminController);




app.listen(2348,async ()=>{
    await connect();
    console.log("testing express vaibhavk");
})