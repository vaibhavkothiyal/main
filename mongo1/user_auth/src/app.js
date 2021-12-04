const express=require('express');
const connect=require('./configs/db');
const {register,login}=require('./controller/authController');
const app=express();
app.use(express.json());

const postController=require('./controller/postController');

app.use('/register',register);
app.use('/login',login);
app.use('/post',postController);

app.listen(2348,async ()=>{
    await connect();
    console.log("testing express vaibhav");
})
