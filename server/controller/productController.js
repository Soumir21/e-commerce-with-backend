const Product=require("../models/product");
const bcrypt=require("bcrypt");


const postProduct=async(req,res)=>{
    try{
        const {email,cart}=req.body;
        const ifEmailExists=await Product.findOne({email:email});
    
        if(ifEmailExists){
           ifEmailExists.cart=cart;
           await ifEmailExists.save();
           return res.status(200).json({message:"email exists"});
        }
        else{
            const cartCreated=await Product.create(req.body);
            return  res.status(200).json({message:"Cart added",cart:cartCreated});

        }
    }catch(err){
        console.log(err);
    }
   
}



module.exports={postProduct};