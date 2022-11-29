import express from "express";
import router from "./router/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", router);

app.get("/",(req, res, next)=>{
    res.send("~~~~~서버서버서버~~~~~");
});

app.listen(PORT,()=>{
    console.log(`*****************************************
     ${PORT}번 포트에서 듣고 있는 중~~*
    ********************************************`);
    
});