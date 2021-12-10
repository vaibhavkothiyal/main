const express=require('express');
const connect=require('./config/db')

const app=express();
app.use(express.json());

const weatherController=require('./controller/weatherController');


app.use("/weatherForcast",weatherController);

app.listen(2349,async ()=>{
    await connect();
    console.log("connected to port 2349");
})