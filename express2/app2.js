const express= require('express');
const app=express();

const data=require("./DATA2.json");
app.use(express.json());

app.get('/',(req,res)=>{
    res.send(data);
})

app.get('/books/:id',(req,res)=>{
    console.log("getting");
    const newData=data.filter((element)=>element.id == req.params.id);
    res.send(newData);
});

app.post('/books',(req,res)=>{
    const newData=[...data,req.body];
    res.send(newData);
});

app.patch('/books/:id',(req,res)=>{
    const newData=data.map(element=>{
        if(element.id==req.params.id){
            if(req?.body?.id) element.id=req.body.id;
            if(req?.body?.author) element.author=req.body.author;
            if(req?.body?.bookName) element.bookName=req.body.bookName;
            if(req?.body?.pages) element.pages=req.body.pages;
            if(req?.body?.pusblishYr) element.pusblishYr=req.body.pusblishYr;
        }
        return element;
    });
    res.send(newData);
});

app.delete('/books/:id',(req,res)=>{
    const newData=data.filter((element)=>element.id != req.params.id);
    res.send(newData);
});


app.listen(2348,()=>{
    console.log("testing express");
})

