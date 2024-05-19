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
app.use(cors());
app.use(express.json());

app.use("/api/auth",userRouter);
app.use("/api/product",productRouter);
app.use("/api/payment",paymentRouter);
app.use("/api/order",orderRouter);
app.use("/api/items",itemRouter)

app.use(errorMiddleware)

dbConenct().then(app.listen(5000,()=>{
    console.log("started listeniong at 5000")
}))
