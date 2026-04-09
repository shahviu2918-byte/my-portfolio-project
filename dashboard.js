const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static("public"))

mongoose.connect("mongodb://127.0.0.1:27017/buildfolio")

// USER SCHEMA
const User = mongoose.model("User",{
username:String,
email:String,
password:String
})

// REGISTER
app.post("/register",async(req,res)=>{

const {username,email,password}=req.body

const user = new User({
username,
email,
password
})

await user.save()

res.json({message:"User registered"})
})


// LOGIN
app.post("/login",async(req,res)=>{

const {email,password}=req.body

const user = await User.findOne({email,password})

if(user){
res.json({success:true})
}else{
res.json({success:false})
}

})


// SERVER
app.listen(3000,()=>{
console.log("Server running at http://localhost:3000")
})