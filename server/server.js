const express=require("express");
const userRouter=require("./Routers/userRouter");
const app=express();
const dbConenct=require("./utility/db");

app.use(express.json());

app.use("/api/auth",userRouter);


dbConenct().then(app.listen(5000,()=>{
    console.log("started listeniong at 5000")
}))
