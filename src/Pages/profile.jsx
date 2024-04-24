import React from 'react'

import profile_img from '../assets/4.png'

const Profile = () => {
  return (
    <main className="h-[89vh] flex justify-center items-center">
      <div className='flex gap-[120px] bg-blue-light pt-[60px] pb-[60px] px-[100px] mb-[20px] drop-shadow-[0_0_2px_rgba(0,0,0,0.25)]'>
        <img src={profile_img} alt="profile" className='h-[200px] w-[200px] rounded-[50%] -mt-[5px]'/>
        <div className='flex flex-col gap-[30px]'>
            <div className='flex gap-[30px]'>
                <p className='w-[100px]'>Username</p>
                <p>:</p>
                <p>ritambiswas1801</p>
            </div>
            <div className='flex gap-[30px]'>
                <p className='w-[100px]'>Name</p>
                <p>:</p>
                <p>Ritam Biswas</p>
            </div>
            <div className='flex gap-[30px]'>
                <p className='w-[100px]'>Address</p>
                <p>:</p>
                <p>Kolkata, West Bengal</p>
            </div>
            <div className='flex gap-[30px]'>
                <p className='w-[100px]'>Job</p>
                <p>:</p>
                <p>Web Developer</p>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Profile
