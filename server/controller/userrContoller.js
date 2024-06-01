const User=require("../models/user");
const bcrypt=require("bcryptjs");

const register=async(req,res)=>{
    const {email,username,phone,password}=req.body;
    try{
        const doesEmailExist=await User.findOne({email:email});
        if(doesEmailExist){
            return res.status(400).json({message:"Email alerady exists"})
        }
        const salt=await bcrypt.genSalt(10);
        const hashedpass=await bcrypt.hash(password,salt);
        const userCreated=await User.create({email,username,phone,password:hashedpass});
        const token=await userCreated.getJWTToken();  
        return res.status(200).json({message:"Successfully registered",user:userCreated,token:token})
    }catch(err){
        console.log(err);
    }   
}


const login=async(req,res)=>{
    const {email,password}=req.body;
   
    try{
        const doesEmailExist=await User.findOne({email:email});
        if(!doesEmailExist){
            return res.status(400).json({message:"Email does not exists"})
        }
        else{
            const isPasswordMathced=await bcrypt.compare(password,doesEmailExist.password)
            if(isPasswordMathced){
                const token=await doesEmailExist.getJWTToken();
               return res.status(200).json({message:"Logged in successfully",token:token})
            }
            else{
                return res.status(404).json({message:"Invalid credentials"})
            }
    }
    }catch(err){
        next(err)
    }   
}




module.exports={register,login};