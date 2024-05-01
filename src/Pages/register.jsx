import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const initialValues = {
  username: '',
  name: '',
  password: '',
  confirmPassword: '',
  address: '',
  job: ''
}
 
const Register = () => {

  const [ formValues, setFormValues ] = useState(initialValues)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormValues({...formValues, [name]:value})
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formValues)
      })
      console.log(response);
    }catch(error){
      console.error('Error \n', error);
    }
    setFormValues(initialValues);
  }

  return (
    <main className='h-[89vh] flex justify-center items-center'>
        <div className='px-[100px] pt-[20px] pb-[30px] bg-blue-light drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]'>
            <h2 className='text-center'>Register</h2>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-[30px] mt-[40px]'>
                <div className='grid grid-cols-2 gap-x-[60px] gap-y-[30px]'>
                    <input type="text" placeholder='Username' name='username' onChange={handleChange} value={formValues.username} className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light' />
                    <input type="text" placeholder='Full Name' name='name' onChange={handleChange} value={formValues.name} className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light' />
                    <input type="password" placeholder='Password' name='password' onChange={handleChange} value={formValues.password} className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light' />
                    <input type="text" placeholder='Address' name='address' onChange={handleChange} value={formValues.address} className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light' />
                    <input type="password" placeholder='Confirm Password' name='confirmPassword' onChange={handleChange} value={formValues.confirmPassword} className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light' />
                    <input type="text" placeholder='Job' name='job' onChange={handleChange} value={formValues.job} className='w-[300px] p-[20px] placeholder:text-black/30 placeholder:font-light' />
                </div>
                <button type='submit' className='rounded-[5px] py-[10px] px-[30px] bg-gray hover:bg-blue transition-drop-shadow duration-300 ease-linear' >Register</button>
            </form>
            <p className='text-center mt-[20px] text-[14px]'>Already a user? <Link to='/login' className='text-[14px] text-[#004cff]'>Login</Link></p>
        </div>
    </main>
  )
}

export default Register
