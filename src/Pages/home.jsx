import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <main className="h-[89vh] flex justify-center items-center">
          <div className="flex flex-col items-center gap-[50px] mb-[50px]">
            <h1 className='text-[#004cff]'>Mern Authentication</h1>
            <Link to='/profile'>
              <button className="py-[15px] px-[30px] bg-blue drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-blue-light transition-drop-shadow duration-300 ease-linear rounded-[5px]">Get Started</button>
            </Link>
          </div>
        </main>
    </div>
  )
}

export default Home
