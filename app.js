var express = require('express');
var app = express();
var passport = require("passport")
var session = require("express-session")
require('./authentication')

app.use(passport.initialize())

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get('/',(req,res)=>{res.sendFile(__dirname+'/login.html')})

app.get('/google',passport.authenticate('google',{scope:'profile'}));


app.get('login',(req,res)=>res.send('success'))

app.get('/google/callback',passport.authenticate('google', { failureRedirect: '/login' }),(req,res)=>{
    // res.redirect('/');

    res.end('logged in')
})

app.listen(3000, () => {
    console.log(`App running on PORT 3000}`);
  });


