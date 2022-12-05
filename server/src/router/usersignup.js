const express = require("express")
const router = express.Router();


const ctrl = require("../controller/userController")
//회원가입
router.post("/user/signup",ctrl.register)





module.exports = router;