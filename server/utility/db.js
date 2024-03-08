const mongoose=require("mongoose");

const dbConenct=async()=>{
    try{
        await mongoose.connect("mongodb+srv://soumir:aforapple@cluster0.uc1sqcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected to the data base");

    }
    catch(err){
        console.log("could not conenct to the database")
    }
}


module.exports=dbConenct;