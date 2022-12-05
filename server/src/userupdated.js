const express = require("express")
const router = express.Router();

const ctrl = require("../controller/userController")
//회원정보 수정
router.put("/user/:id",ctrl.updatecontroll)


module.exports = router;
