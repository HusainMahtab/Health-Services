import React, { useEffect, useState } from 'react'
import axios from "axios"
import {toast,Toaster} from "react-hot-toast"
import {useNavigate} from "react-router-dom"
function AllServices() {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()
    const getAllServices=async()=>{
        try {
            const response=await axios.get(`http://localhost:3000/api/services/`)
            console.log("response",response.data)
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.error("Error while fetching data",error)
        }
    }
    useEffect(()=>{
      getAllServices()
    },[])

    const handleDelete=async(_id)=>{
        try {
            await axios.delete(`http://localhost:3000/api/services/delete-service/${_id}`)
            setData((prevData) => prevData.filter(service => service._id !== _id))
            toast.success("deleted successfully")
            console.log("deleted successfully")
        } catch (error) {
            console.error("Error while deleting service",error)
            toast.error("Error while deleting service")
        }
    }

   
    const handleEdit = (service) => {
      navigate(`/edit-service`, { state: { service } });
    };
   
  return (
    <div className='flex justify-center items-center flex-wrap gap-2 p-4'>
      {
        loading ? (
            <div className="bg-blue-700 text-xl font-bold p-2 w-[200px] text-white">Loding wait...</div>
        ) : (
             <div>
             {
              data.map((service,index)=>(
                <div className=" grid w-[300px] md:w-[500px] h-[200px] shadow-lg border-green-700 p-4" key={index+1}>
                    <h2 className="captilize font-serif"><span className="text-black font-semibold px-2">Name:</span>{service.name}</h2>
                    <p className=""><span className="text-balck font-semibold px-2">Description:</span>{service.description}</p> 
                    <h2 className=""><span className="text-black font-semibold px-2">Price:</span>₹{service.price}</h2>
                    <div className="flex gap-2">
                        <button className="border-2 border-green-700 text-green-700 px-2 rounded-lg w-[80px] hover:bg-green-700 hover:text-white font-semibold font-serif duration-300" onClick={() => handleEdit(service)}>Edit</button>
                        <button className="border-2 border-red-700 text-red-700 px-2 rounded-lg w-[80px] hover:bg-red-700 hover:text-white font-semibold font-serif duration-300" onClick={()=>handleDelete(service._id)}>Delete</button>
                        <Toaster/>
                    </div>
                </div>
              )) 
            }
           </div>
        )
      }
        
    </div>
  )
}

export default AllServices