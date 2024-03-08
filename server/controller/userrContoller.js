const User=require("../models/user");
const bcrypt=require("bcrypt");

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
        return res.status(200).json({user:userCreated})
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
               return res.status(200).json({message:"Logged in successfully"})
            }
            else{
                return res.status(404).json({message:"Invalid credentials"})
            }
    }
    }catch(err){
        return res.status(404).json({msg:err})
        console.log(err);
    }   
}




module.exports={register,login};