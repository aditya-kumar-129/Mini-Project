const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_TOKEN} = require('../keys')
const authorization = require('../middleware/loggedin')

router.get('/home', (req,res) => {
    res.send("hello from auth")
})

router.post('/signup', (req,res) => {
    console.log(req.body)
    const {name, username, email, password} = req.body
    if(!email || !name || !password || !username){
        return res.status(422).json({error: "Please add all the fields"})
    }
    User.findOne({email: email})
    .then((savedUser) => {
        if(savedUser){
            return res.status(422).json({error: "Email already exist"})
        }
        User.findOne({username: username})
        .then((savedName) => {
            if(savedName){
                return res.status(422).json({error: "Username already exist"})
            }
            bcrypt.hash(password, 12)
            .then(hashedPassword => {
                const user = new User({
                    name,
                    username,
                    email,
                    password:hashedPassword
                })
        
                user.save()
                .then(user=>{
                    res.json({message: "Saved User"})
                })
                .catch(err => {
                    console.log(err)
                })
            })
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(!savedUser){
           return res.status(422).json({error:"Invalid Email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch => {
            if(doMatch){
               const token = jwt.sign({_id:savedUser._id}, JWT_TOKEN)
               res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid Email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/home');
});

module.exports = router