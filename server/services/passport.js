const passport = require("passport");
const User = require("../models/User");
const JwtStaregy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require('passport-local')


const localLogin = new LocalStrategy({usernameField:'email'},(email,password,done)=>{
    User.findOne({email},(err,user)=>{
        if(err){return done(err)}
        if(!user){return done(null,false)}
        user.comparePassword(password,(err,isMatch)=>{
            if(err){return done(err)}
            if(!isMatch){return done(null,false)}
            return done(null,user)
        })
    })
})

// Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
    secretOrKey:'secret'
};

// Create JWT strategy
const jwtLogin = new JwtStaregy(jwtOptions, (payload, done) => {
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// tell passport to use this strategy
passport.use(localLogin)
passport.use(jwtLogin)