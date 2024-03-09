const express=require("express");
const userController=require("../controller/userrContoller");
const router=express.Router();
const validate=require("../middleWare/zodValidator");
const {registerSchema,loginSchema}=require("../zodSchema/userZodSchema");
router.route("/register").post(validate(registerSchema),userController.register);
router.route("/login").post(validate(loginSchema),userController.login);

module.exports=router;