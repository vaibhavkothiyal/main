const express = require('express');
const connect=require('./configs/db');


const userController=require('./controller/userContro');
const evalatmptController=require('./controller/evalatmptContro');
const studentController=require('./controller/studentcontro');
const topicController=require('./controller/topicConto');
const evalutionController=require('./controller/evalutionContro');
const queryController=require('./controller/queryContro');

const app=express();
app.use(express.json());

app.use('/users',userController);
app.use('/topics',topicController);
app.use('/students',studentController);
app.use('/evalutions',evalutionController);
app.use('/evalAtmpts',evalatmptController);
app.use('/queries',queryController)


app.listen(2348,async ()=>{
    await connect();
    console.log("testing express vaibhav");
})