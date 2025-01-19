const Order=require("../models/order");

const postOrderDetails=async(req,res)=>{
    try{
        console.log(req.body);
        const orderCreated=await Order.create({email:req.user,...req.body});
        res.status(200).json({message:"order created",order:orderCreated});

    }
    catch(err){
        res.status(404).json({message:"order could not be posted"})
    }
}

const getOrderDetails=async(req,res)=>{
    try{
        const orderDetails=await Order.find({email:req.user});
        if(!orderDetails || orderDetails.length===0){
            return res.status(400).json({message:"no order found",orderDetails:[]})
        }
        console.log("order succesful")
        return res.status(200).json({message:"order founde", orderDetails:orderDetails})
        

    }catch(err){
        res.status(404).json({message:"orde details could not be fetched"})
    }
}

module.exports={postOrderDetails,getOrderDetails}