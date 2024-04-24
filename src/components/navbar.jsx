import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-[20px] bg-blue lg:px-[120px] items-center h-[11vh]'>
      <div>
        <Link to='/'>
          <h3 className='text-[#004cff]'>Logo</h3>        
        </Link>
      </div>
      <div className='flex gap-x-[60px] items-center'>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>
          <button className='px-[30px] py-[10px] bg-blue-lighter text-[16px] rounded-[5px]  hover:bg-blue-light transition-drop-shadow duration-300 ease-linear'>Login</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
