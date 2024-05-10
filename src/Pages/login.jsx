import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react'

import { UserContext } from '../context/user'

const initialValues = {
  username: '',
  password: ''
}

const Login = () => {

  const [formValues, setFormValues] = useState(initialValues);

  const { verifyAndSetUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues({...formValues, [name]:value});
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      try{
        const response = await fetch('http://localhost:3000/api/users/auth/login',{
          method:'POST',
          credentials: 'include',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(formValues)
        })
        const data = await response.json()
        await verifyAndSetUser(data.authToken)
        navigate('/profile')
      }catch(error){
        console.error('Error\n', error);
      }
      setFormValues(initialValues);
  }

  return (
      <main className='h-[89vh] flex justify-center items-center'>
        <div className='px-[100px] pt-[30px] pb-[60px] bg-blue-light drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]'>
            <h2 className='text-center'>Login</h2>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-[40px] mt-[60px]'>
                <input type="text" placeholder='Username' name='username' onChange={handleChange} value={formValues.username} className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                <input type="password" placeholder='Password' name='password' onChange={handleChange} value={formValues.password} className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light'/>
                <button type='submit' className='rounded-[5px]  py-[10px] px-[30px] bg-gray hover:bg-blue transition-drop-shadow duration-300 ease-linear'>Login</button>
            </form>
            <p className='text-center mt-[20px] text-[14px]'>Not a user? <Link to='/register' className='text-[14px] text-[#004cff]'>Register</Link></p>
        </div>
      </main>
  )
}

export default Login
