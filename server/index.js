const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require("./models/users")
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/users");

app.post('/signup', (req,res)=>{
    userModel.create(req.body)
    .then(users => res.json(users))
  
})

app.post('/login',(req,res)=>{
    const {username,password}= req.body;
    userModel.findOne({username: username})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json('user existes')
            }else{
                res.json('the password is incorrect')
            }
        }else{
            res.json('user does not existes')
        }
    })
})

app.listen(3001, ()=>{
    console.log("Server is running on port 3001")
})