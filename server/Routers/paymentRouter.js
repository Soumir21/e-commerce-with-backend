const express=require("express");
const paymentContoller=require("../controller/paymentController");
const router=express.Router();
const jwtMiddleware=require("../middleWare/jwtMiddleware")


router.route("/getproductid").post(paymentContoller.getOrder)

router.route("/validate").post(paymentContoller.validate)


module.exports=router;