import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-14 px-16 p-4'>
         <h4 className=' font-bold bg-black  px-6 py-2 uppercase rounded-full'>Target Audience</h4>
         <button className='bg-blue-500 hover:bg-blue-700 uppercase tracking-wide text-sm font-bold py-2 px-6 rounded'>
           Digital banking platform
         </button>
    </div>
  )
}

export default Navbar
