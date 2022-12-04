const express = require("express")
const router = express.Router();

const ctrl = require("../controller/userController")

//로그인
router.post("/user/login",ctrl.loginctrl)


module.exports = router;