const express = require('express');
const connect = require('./configs/db');
const { register, login } = require('./controller/authController');
const passport = require('./configs/passport');
const app = express();
app.use(express.json());

const productController = require('./controller/productController');

app.use('/register', register);
app.use('/login', login);
app.use('/products', productController);
app.use(passport.initialize());

passport.serializeUser(function ({user,token}, done) {
    done(null, {user,token});
});

passport.deserializeUser(function ({user,token}, done) {
    done(null, {user,token});
});

app.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: '/auth/google/failure'
}),function (req,res){
    console.log(req.profile);
    return res.send(req.user);
}
);


app.get('/auth/google/failure',function (req,res){
    return res.send("failed to login");
})

app.listen(2348, async () => {
    await connect();
    console.log("testing express vaibhav");
})


// GOOGLE_CLIENT_ID=266807182084-4073q852f8vesskr6ea5mp56dsk3sh82.apps.googleusercontent.com
// GOOGLE_CLIENT_SECRET=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