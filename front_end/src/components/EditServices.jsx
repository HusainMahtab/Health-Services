import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate, useLocation } from 'react-router-dom'

function EditServices() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { service } = state || {}

  const [data, setData] = useState({
    name: '',
    description: '',
    price: ''
  })

  useEffect(() => {
    if (service) {
      setData({
        name: service.name,
        description: service.description,
        price: service.price
      })
    }
  }, [service])

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3000/api/services/update-service/${service._id}`, data)
      toast.success('Service Edited Successfully')
      navigate('/')
    } catch (error) {
      console.error('Error while editing service', error)
      toast.error('Service not Edited')
    }
  }

  return (
    <div className='w-full h-[100vh] flex justify-center'>
      <div className=''>
        <h2 className="font-bold p-2 text-2xl font-serif">Edit Service</h2>
        <form className="grid gap-3 items-center shadow-xl p-4 w-[350px] md:w-[500px]" onSubmit={handleEdit}>
          <div className='grid'>
            <label htmlFor="name" className='text-lg font-serif font-semibold'>Service Name:</label>
            <input 
              type="text" 
              name='name' 
              id='name' 
              onChange={handleChange} 
              value={data.name} 
              placeholder='Enter Service name' 
              className='p-1 bg-slate-200 rounded'
            />
          </div>
          <div className='grid'>
            <label htmlFor="description" className='text-lg font-serif font-semibold'>Description:</label>
            <input 
              type="text" 
              name='description' 
              id='description' 
              onChange={handleChange} 
              value={data.description} 
              placeholder='Enter Description' 
              className='p-1 bg-slate-200 rounded'
            />
          </div>
          <div className='grid'>
            <label htmlFor="price" className='text-lg font-serif font-semibold'>Price:</label>
            <input 
              type="number" 
              name='price' 
              id='price' 
              onChange={handleChange} 
              value={data.price} 
              placeholder='Enter Price' 
              className='p-1 bg-slate-200 rounded'
            />
          </div>
          <button className='w-full bg-green-700 hover:bg-green-600 p-1 rounded text-white font-semibold'>Edit Service</button>
          <Toaster />
        </form>
      </div>
    </div>
  )
}

export default EditServices
