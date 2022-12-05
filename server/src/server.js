const express = require("express")
const bodyParser = require("body-parser")
const server=express();
const PORT = 3000;
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ limit: '1gb', extended: false }));

//라우터랑 server.js랑 연결
const update =require("../src/router/userupdated")
const signup =require("../src/router/usersignup")
const login =require("../src/router/userlogin") //라우터 모듈 사용
server.use("/",signup)
server.use("/",update)
server.use("/",login) //use ->미들웨어 




//서버 연결 확인
server.listen(PORT,(err)=>{
    if(err){
        console.log("not connected to server")
    }else{
        console.log("connected to server")
    }
})