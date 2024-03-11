const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
require("dotenv").config();
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

userSchema.methods.getJWTToken = async function() {
    try {
            return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
    
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "10d"
            });
      
    } catch (err) {
        console.log(err);
        throw new Error('Error generating JWT token');
    }
};

const User=new mongoose.model("User",userSchema);

module.exports=User;