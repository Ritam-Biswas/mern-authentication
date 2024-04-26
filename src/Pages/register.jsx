import React from 'react'
import {Link} from 'react-router-dom'
 
const Register = () => {
  return (
    <main className='h-[89vh] flex justify-center items-center'>
        <div className='px-[100px] pt-[20px] pb-[30px] bg-blue-light drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]'>
            <h2 className='text-center'>Register</h2>
            <form className='flex flex-col items-center gap-[30px] mt-[40px]'>
                <div className='grid grid-cols-2 gap-x-[60px] gap-y-[30px]'>
                    <input type="text" placeholder='Username' name='username' className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                    <input type="password" placeholder='Full Name' name='full_name' className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                    <input type="password" placeholder='Password' name='password' className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                    <input type="text" placeholder='Address' name='address' className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                    <input type="text" placeholder='Confirm Password' name='confirm_password' className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                    <input type="text" placeholder='Job' name='job' className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                </div>
                <button className='rounded-[5px] py-[10px] px-[30px] bg-gray hover:bg-blue transition-drop-shadow duration-300 ease-linear'>Register</button>
            </form>
            <p className='text-center mt-[20px] text-[14px]'>Already a user? <Link to='/login' className='text-[14px] text-[#004cff]'>Login</Link></p>
        </div>
    </main>
  )
}

export default Register
