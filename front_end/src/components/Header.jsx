import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <div className=' flex justify-between items-center gap-4 w-full h-fit p-4 bg-white text-green-700 text-xl font-bold font shadow-lg fixed z-50'>
       <h1 className='text-2xl text-green-700 font-mono font-semibold animate-bounce'>Jarurat</h1>
      <div className='w-full flex justify-end gap-2'>
         <div className='hover:bg-green-700 hover:text-white p-3 cursor-pointer duration-500 transition-all'>
           <Link to={"/"}>AllServices</Link>
         </div>
         <div className='hover:bg-green-700 hover:text-white p-3 cursor-pointer duration-500 transition-all'>
           <Link to={"/create"}>AddService</Link>
         </div>
      </div>
    </div>
   
  )
}

export default Header