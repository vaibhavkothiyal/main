const express=require('express');
const connect=require('./configs/db');

const userController=require('./controller/userController');

const app=express();
app.use(express.json());

app.use('/users',userController);

app.listen(2348,async ()=>{
    await connect();
    console.log("testing express vaibhav");
})
