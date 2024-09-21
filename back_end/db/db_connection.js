import mongoose from "mongoose";

const connectDB=()=>{
    try {
        mongoose.connect("mongodb+srv://mahtabh667:jaruratCare@cluster0.updq8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB connected successfully")
    } catch (error) {
       console.error("error while connecting DB!",error) 
    }
}

export default connectDB