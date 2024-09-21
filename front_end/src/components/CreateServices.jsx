import React, { useState } from 'react'
import axios from 'axios'
import {Toaster,toast} from "react-hot-toast"
import {useNavigate} from "react-router-dom"
function CreateServices() {
  const [data,setData]=useState({
    name:"",
    description:"",
    price:""
  })
  const navigate=useNavigate()

  const handleChange=(e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    //console.log("Updated Data:", { ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("data",data)
     try {
       axios.post(`https://health-services-pan3.onrender.com/api/services/create-service`,data)
       console.log("Add service successfully")
       toast.success("Service Added Successfully")
       navigate("/")
     } catch (error) {
       console.error("Error while adding services")
       toast.error("Service not Add")
     }
  }
  return (
    <div className='w-full h-[100vh] flex justify-center'>
      <div className=''>
       <h2 className="font-bold p-2 text-2xl font-serif">Add Services</h2>
        <form className="grid gap-3 items-center shadow-xl p-4 w-[350px] md:w-[500px]" onSubmit={handleSubmit}>
        <div className='grid'>
          <label htmlFor="" id='name' className='text-lg font-serif font-semibold'>Service Name:</label>
          <input type="text" name='name' id='name' onChange={handleChange} value={data.name} placeholder='Enter Service name' className='p-1 bg-slate-200 rounded'/>
        </div>
        <div className='grid'>
          <label htmlFor="" id='description' className='text-lg font-serif font-semibold'>Description:</label>
          <input type="text" name='description' id='description' onChange={handleChange} value={data.description} placeholder='Enter Description' className='p-1 bg-slate-200 rounded'/>
        </div>
        <div className='grid'>
          <label htmlFor="" id='price' className='text-lg font-serif font-semibold'>Price:</label>
          <input type="number" name='price' id='price' onChange={handleChange} value={data.price} placeholder='Enter Price' className='p-1 bg-slate-200 rounded'/>
        </div>
        <button className='w-full bg-green-700 hover:bg-green-600 p-1 rounded text-white font-semibold'>Add Service</button>
        <Toaster/>
       </form>
       </div>
      
      </div>
  )
}

export default CreateServices
