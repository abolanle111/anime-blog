import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/anime-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// import Signup from '../pages/Signup';



const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='flex justify-between items-center w-full p-8'>
    <img src={logo} alt='logo'/>
      <ul className='hidden lg:flex gap-x-6 justify-around'>
        <li><Link to="/" className='home relative mx-6'>Home</Link></li>
        <li><Link to="/blog" className='mx-6'>Blog</Link></li>
        <li><Link to="/signup" className='mx-6 bg-black py-2 px-8 rounded-md text-white'>Sign Up</Link></li>
        <li><Link to="/login" className='mx-'>Login</Link></li>
      </ul>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu - Visible when menuOpen is true */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-800 p-4 z-50 shadow-md">
          <ul className="flex flex-col space-y-4">
            <li><Link to="/" onClick={toggleMenu} className="home mx-6">Home</Link></li>
            <li><Link to="/blog" onClick={toggleMenu} className="mx-6">Blog</Link></li>
            <li><Link to="/signup" onClick={toggleMenu} className="mx-6 bg-black py-2 px-8 rounded-md text-white">Sign Up</Link></li>
            <li><Link to="/login" onClick={toggleMenu} className="mx-6">Login</Link></li>
          </ul>
        </div>
      )}
        
    </div>
  )
}

export default Header