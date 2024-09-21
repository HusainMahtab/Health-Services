import mongoose from "mongoose"

const serviceSchema=new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
},{timestamps:true})


export const Service=mongoose.model("Sevice",serviceSchema)