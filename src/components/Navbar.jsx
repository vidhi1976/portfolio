import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-10 h-10 bg-white font-bold rounded-lg items-center justify-center flex shadow-md ">
        <p className='pink-gradient_text'>VS</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium '>
        <NavLink to="/about" className={({ isActive }) => isActive?
        'text-pink-700 ': 'text-black'}>
            About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive?
        'text-pink-700': 'text-black'}>
            Projects
        </NavLink>
        
      </nav>
    </header>
  )
}

export default Navbar
