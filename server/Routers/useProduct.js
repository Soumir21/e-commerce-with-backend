const express=require("express");
const productController=require("../controller/productController");
const router=express.Router();
const jwtMiddleware=require("../middleWare/jwtMiddleware")

// router.route("/getproduct").get(userController.getProduct);
router.route("/postproduct").post(jwtMiddleware,productController.postProduct);
router.route("/getproduct").get(jwtMiddleware,productController.getProduct);
module.exports=router;