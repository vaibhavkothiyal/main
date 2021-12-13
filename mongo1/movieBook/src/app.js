const express = require('express');
const connect = require('./configs/db');
const { register, login } = require('./controller/authController');
const app = express();
app.use(express.json());

const movieController=require('./controller/movieController');
const theatreController=require('./controller/theatreController')
const screenController=require('./controller/screenController');
const showController=require('./controller/showController');
const seatController=require('./controller/seatController');


app.use('/register', register);
app.use('/login', login);
app.use('/movies',movieController);
app.use('/theatres',theatreController);
app.use('/screens',screenController);
app.use('/shows',showController);
app.use('/seats',seatController);


app.listen(2348, async () => {
    await connect();
    console.log("testing express vaibhav");
});