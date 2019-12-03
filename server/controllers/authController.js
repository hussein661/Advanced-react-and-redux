const User =  require('../models/User')
const jwt = require('jsonwebtoken')


const generateToken = user =>{
    return jwt.sign({email:user.email},'secret')
}


module.exports = {
    signup:(req,res,next)=>{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(422).send({error:'you must provide email and password'})
        }
        User.findOne({email},(err,existedUser)=>{
            if(err){return next(err)}
            if(existedUser){
                return res.status(422).send({error:'Email is in use'})
            }
            const user = new User({
                email,
                password
            })
            user.save(err=>{
                if(err){return next(err)}
              return  res.json({user,token:generateToken(user)})
            })
        })
    },


    signin:(req,res,next)=>{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(422).json({error:'email and password must be provided'})
        }
        res.send({token:generateToken(req.user)})
        
    }
}