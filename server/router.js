const auhController = require('./controllers/authController')
const passportService = require('./services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt',{session:false})
const requireSignin = passport.authenticate('local',{session:false})
module.exports = app => {
    app.get('/',requireAuth,(req,res)=>{
        res.send({auth:true})
    })
    app.post('/signup',auhController.signup)
    app.post('/signin',requireSignin,auhController.signin)
}