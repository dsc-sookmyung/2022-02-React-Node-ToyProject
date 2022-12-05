import express from "express";
import router from "./router/index.js";
import config from "./config/index.js";
import connectDB from './Loaders/db.js';

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static("src/public"));

app.use("/", router);

app.get("/",(req, res, next)=>{
    res.send("~~~~~서버서버서버~~~~~");
});

app.listen(PORT,()=>{
    console.log(`*****************************************
    ${PORT}번 포트에서 듣고 있는 중~~*
    ********************************************`);
    
});