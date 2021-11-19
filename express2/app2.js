const express= require('express');
const app=express();

const logger=(req,res,next)=>{
    req.bb={"api_requested_by": "vaibhav"};
    console.log(req.method);
    next();
}

const data=require("./DATA2.json");
app.use(express.json());

app.get('/',logger,(req,res)=>{
    req.bb.books=data;
    res.send(req.bb);
})

app.get('/books/:id',logger,(req,res)=>{
    console.log("getting");
    const newData=data.filter((element)=>element.id == req.params.id);
    req.bb.books=newData;
    req.bb.api_requested_by=newData[0].author;
    res.send(req.bb);
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
});


app.listen(2348,()=>{
    console.log("testing express");
})


// const authorise = (permission) => {
//     return (req, res, next) => {
//       const originalSendFunc = res.send.bind(res);
//       res.send = function (body) {
//         body.name = "Nrupul Dev";
//         console.log(body); // do whatever here
//         return originalSendFunc(body);
//       };
//       next();
//     };
//   };
  