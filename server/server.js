const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const router = require('./router')


mongoose.connect('mongodb://localhost:27017/reactdb',{useNewUrlParser:true})


//App setup
app.use(bodyParser.json({type:'*/*'}))
router(app)


//Server setup
const PORT = process.env.PORT || 5500
const server = http.createServer(app)
server.listen(PORT,()=>{
    console.log(`listining on port ${PORT}`)
})