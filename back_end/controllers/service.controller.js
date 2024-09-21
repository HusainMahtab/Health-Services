import { Service } from "../models/service.modle.js";

// Get all services
const getAllServices=async(req,res)=>{
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error?.message });
    }
}

// Add new service
const newService=async(req,res)=>{
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const newService = new Service({ name, description, price });
    try {
        const savedService = await newService.save();
        res.status(201).json({savedService,message:"service created successfully"});
    } catch (error) {
        res.status(400).json({ message: error?.message });
    }
}

// Update service
const updateService = async (req, res) => {
    const { name, description, price } = req.body;
    try {
        const updatedService = await Service.findByIdAndUpdate(
            req.params._id, 
            { name, description, price }, 
            { new: true } 
        );
        
        if (!updatedService) {
            return res.status(404).json({ message: "Service not found" });
        }
        
        return res.status(200).json({ 
            message: "Service updated successfully", 
            data: updatedService 
        });

    } catch (error) {
        return res.status(400).json({ message: error?.message });
    }
};


// delete service
const deleteService=async(req,res)=>{
    try {
        //console.log("_id",req.params._id)
        await Service.findByIdAndDelete(req.params._id);
        res.json({ message: "Service deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


export {
    getAllServices,
    newService,
    updateService,
    deleteService 
}