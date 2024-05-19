const express=require("express");
const router=express.Router();
const itemController=require("../controller/itemController")

router.route("/getitems").get(itemController.getitems)

module.exports=router;