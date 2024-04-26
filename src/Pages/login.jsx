import React from 'react'

const Login = () => {
  return (
      <main className='h-[89vh] flex justify-center items-center'>
        <div className='px-[100px] pt-[30px] pb-[60px] bg-blue-light drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]'>
            <h2 className='text-center'>Login</h2>
            <form className='flex flex-col items-center gap-[40px] mt-[60px]'>
                <input type="text" placeholder='Username' name='username' className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                <input type="password" placeholder='Password' name='password' className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                <button className='rounded-[5px] mt-[20px] py-[10px] px-[30px] bg-gray hover:bg-blue transition-drop-shadow duration-300 ease-linear'>Login</button>
            </form>
        </div>
      </main>
  )
}

export default Login