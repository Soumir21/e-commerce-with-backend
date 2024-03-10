const express=require("express");
const userController=require("../controller/productController");
const router=express.Router();

// router.route("/getproduct").get(userController.getProduct);
router.route("/postproduct").post(userController.postProduct);

module.exports=router;