var passport = require("passport")


var GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((user,done)=>{
    done(null,user.id)
})


passport.use(new GoogleStrategy({
    clientID: '151645505586-5matded0g9hm4m7gl3athcudjevo5re0.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
   cb(null,profile)
  }
));