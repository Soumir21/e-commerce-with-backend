const Razorpay=require("razorpay");
const crypto=require("crypto");
const getOrder=async(req,res)=>{
    try{
        const razorpay=new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_SECRET,
        })
    
        const options=req.body;
        const order=await razorpay.orders.create(options);
    
        if(!order){
            return res.status(500).send("error");
        }
    
        res.json(order);
    }
    catch(err){
        res.status(500).send("error")
        console.log(err)
    }
}

const validate=(req,res)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
    const sha=crypto.createHmac("sha256",process.env.RAZORPAY_SECRET);
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest=sha.digest("hex")

    if(digest!==razorpay_signature){
        return res.status(400).json({msg:"transaction is not legit"});
    }

    res.json({
        msg:"success",
        order_id:razorpay_order_id,
        payment_id: razorpay_payment_id
    })
}

module.exports={getOrder,validate}



