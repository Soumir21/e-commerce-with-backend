const z=require("zod");
const registerSchema=z.object({
    userName:z
    .string({required_error:"name is required"})
    .trim()
    .min(3,{message:"minimum 3 charectors required"})
    .max(100,{message:"maximum charecters can be 100"}),

    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Invalid email adress"})
    .min(5,{message:"minimum 5 charectors required for email"})
    .max(100,{message:"maximum charecters can be 100"}),

    phone:z
    .string({required_error:"phone is required"})
    .trim()
    .min(5,{message:"minimum 5 digits required for number"})
    .max(10,{message:"maximum charecters can be 10"}),

    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(5,{message:"minimum 5 charectors required for password"})
    .max(100,{message:"maximum charecters can be 100"}),
});

const loginSchema=z.object({
     email:z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Invalid email adress"})
    .min(5,{message:"minimum 5 charectors required for email"})
    .max(100,{message:"maximum charecters can be 100"}),

    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(5,{message:"minimum 5 charectors required for password"})
    .max(100,{message:"maximum charecters can be 100"}),
});
module.exports={registerSchema,loginSchema};