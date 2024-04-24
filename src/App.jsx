import { Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar"
import Home from "./Pages/home"
import Login from "./Pages/login"
import Register from "./Pages/register"
import Profile from "./Pages/profile"

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  )
}
