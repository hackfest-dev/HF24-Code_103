import React from 'react'

const Navbar = () => {
  return (
    <div className='p-6 flex flex-row gap-2 justify-between items-center bg-[#6495ED] mb-10'>
        <h1 className='text-4xl font-bold text-gray-900 font-poppins'>MedStop</h1>
        <p className='text-gray-700 font-dosis text-xl'>One stop platform for searching doctors and medical queries</p>
    </div>
  )
}

export default Navbar
