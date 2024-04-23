import React from 'react'

const Home = () => {
  return (
    <div>
        <main className="h-[89vh] flex justify-center items-center">
            <div className="flex flex-col items-center gap-[50px] mb-[50px]">
            <h1>Mern Authentication</h1>
            <button className="py-[15px] px-[30px] bg-blue drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-blue-light transition-drop-shadow duration-300 ease-linear rounded-[5px]">Get Started</button>
            </div>
        </main>
    </div>
  )
}

export default Home
