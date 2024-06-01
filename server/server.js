const express=require("express");
const userRouter=require("./Routers/userRouter");
const productRouter=require("./Routers/useProduct");
const paymentRouter=require("./Routers/paymentRouter");
const orderRouter=require("./Routers/orderRouter");
const itemRouter=require("./Routers/itemRouter");
const app=express();
const dbConenct=require("./utility/db");
const cors=require("cors");
const errorMiddleware=require("./middleWare/errorMidlleware");
const path=require("path")
app.use(cors());
app.use(express.json());
require("dotenv").config();
app.use("/api/auth",userRouter);
app.use("/api/product",productRouter);
app.use("/api/payment",paymentRouter);
app.use("/api/order",orderRouter);
app.use("/api/items",itemRouter)
const port = process.env.PORT;

app.use(errorMiddleware)

app.use(express.static(path.join(__dirname,'/client/build')))
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,'/client/build/index.html'))
})


dbConenct().then(app.listen(port,()=>{
    console.log("started listeniong at ",port)
}))
