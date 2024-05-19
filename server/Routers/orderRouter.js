const express=require("express");
const paymentContoller=require("../controller/orderController");
const router=express.Router();
const jwtMiddleware=require("../middleWare/jwtMiddleware")

router.route("/postorder").post(paymentContoller.postOrderDetails)

router.route("/getorder").get(jwtMiddleware,paymentContoller.getOrderDetails)


module.exports=router;