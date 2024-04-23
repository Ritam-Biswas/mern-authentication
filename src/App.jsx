import { Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar"
import Home from "./Pages/home"
import Login from "./Pages/login"
import Register from "./Pages/register"

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}
