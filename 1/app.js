const express= require('express');
const app=express();

const data=require("./DATA.json")

app.get('/',(req,res)=>{
    console.log("Welcome to Home page");
})
app.get('/users',(req,res)=>{
    data.forEach(element => {
        console.log(element.first_name)
    });
})

app.listen(2347,()=>{
    console.log("testing express");
})