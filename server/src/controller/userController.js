const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('dotenv').config({path:'variables.env'})

//몽고db연결확인
mongoose.connect(process.env.mongodburl,{useNewUrlParser:true},(err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log('connected to database')
    }
})
const User =require('../Models/Users')


//회원가입
const register = (req,res)=>{
    const newUser = new User(req.body);
    newUser.save((err)=>{
        if(err){
            return res.status(500).json({message:"저장실패"})
        }else{
            return res.status(200).json({message:"저장성공"})
        }
    })
}

//로그인
const loginctrl = (req,res)=>{
    User.findOne( { id:req.body.id, password:req.body.password },(err,user)=>{
        if(err) return res.status(500).json({message:'에러'})
        else if(user) return res.status(200).json(user)
        else return res.status(404).json({message:"유저없음"})
    }
    )
}


//유저업데이트

const updatecontroll = (req,res)=>{
    console.log(req.params.id);
    User.findOneAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            password:req.body.password,
            nickname:req.body.nickname
        }
    })
    .then(result=>{
        res.status(200).json({
            UpdatedUser:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
}

module.exports={
    register,
    loginctrl,
    updatecontroll
}