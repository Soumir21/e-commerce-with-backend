const jwt = require("jsonwebtoken");
const User = require("../models/user");

const jwtMiddleware=async (req,res,next)=>{
    try{
        const token=req.header("Authorization");

        const JWTtoken=token.replace("Bearer","").trim();
        if(!token){
            res.status(404).send("invalid token 65");
        }
        else{
           
            const isVerify=await jwt.verify(JWTtoken,process.env.JWT_SECRET_KEY)
            const userData=await User.findOne({email:isVerify.email}).select({password:0});
            console.log(userData);
           req.user=userData.email;
           req.token=token;
        //    req.userId=userData._id;


            next();
        }
    }
    catch(err){
        next(err);
    }
}

module.exports=jwtMiddleware