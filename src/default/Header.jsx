import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import logo from "../assets/anime-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// import Signup from '../pages/Signup';

const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("/");
  const location = useLocation();

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user); // Set isAuth to true if a user is signed in
    });
    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      setIsAuth(false);
      // window.location.pathname = "/"
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // Automatically set the active link based on the current route
  useState(() => {
    setActive(location.pathname);
  }, [location]);

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };

  const toggleMenu = () => {
    console.log("Before toggle:", menuOpen);
    setMenuOpen(!menuOpen);
    console.log("After toggle:", !menuOpen);
  };

  return (
    <div className="flex justify-between items-center w-full p-8">
      <img src={logo} alt="logo" />

      {/* Desktop Navigation dont forget to add onclick to logout button*/}
      <ul className="hidden lg:flex gap-x-6 justify-around">
        {[
          { to: "/", label: "Home" },
          { to: "/blog", label: "Blog" },
          { to: "/dashboard", label: "Dashboard" },
          {
            to: "/signup",
            label: "Sign Up",
            special: "bg-black py-2 px-8 rounded-md text-white",
          },
          ...(!isAuth
            ? [{ to: "/login", label: "Login" }]
            : [
                {
                  to: "/",
                  label: "Logout",
                  onClick: logout, // Add the onClick handler for Logout
                },
              ]),
        ].map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault(); // Prevent navigation for Logout
                  item.onClick();
                }
                setActive(item.to);
              }}
              className={`mx-6 relative ${
                active === item.to
                  ? "underline underline-offset-4 decoration-2 "
                  : item.special || ""
              }`}
            >
              {item.label}
              {active === item.to && (
                <span
                  className="absolute bottom-[-6px] left-0 w-full h-[2px] bg-white"
                  aria-hidden="true"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Mobile Menu - Visible when menuOpen is true */}
      {menuOpen && (
        <div className=" absolute top-full left-0 w-full bg-gray-800 p-4 z-50 shadow-md">
          <ul className="flex flex-col space-y-4">
            {[
              { to: "/", label: "Home" },
              { to: "/blog", label: "Blog" },
              {
                to: "/signup",
                label: "Sign Up",
                special: "bg-black py-2 px-8 rounded-md text-white",
              },
              ...(!isAuth
                ? [{ to: "/login", label: "Login" }]
                : [
                    {
                      to: "/",
                      label: "Logout",
                      onClick: logout, // Add the onClick handler for Logout
                    },
                  ]),
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault(); // Prevent navigation for Logout
                      item.onClick();
                    }
                    setActive(item.to);
                  }}
                  className={`mx-6 relative ${
                    active === item.to
                      ? "underline underline-offset-4 decoration-2"
                      : item.special || ""
                  }`}
                >
                  {item.label}
                  {active === item.to && (
                    <span
                      className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <div className='flex justify-between items-center w-full p-8'>
//     <img src={logo} alt='logo'/>
//       <ul className='hidden lg:flex gap-x-6 justify-around'>
//         <li><Link to="/" className='home relative mx-6'>Home</Link></li>
//         <li><Link to="/blog" className='mx-6'>Blog</Link></li>
//         <li><Link to="/signup" className='mx-6 bg-black py-2 px-8 rounded-md text-white'>Sign Up</Link></li>
//         <li><Link to="/login" className='mx-'>Login</Link></li>
//       </ul>

//       <div className="lg:hidden">
//         <button onClick={toggleMenu} className="focus:outline-none">
//           <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="h-6 w-6" />
//         </button>
//       </div>

//       {/* Mobile Menu - Visible when menuOpen is true */}
//       {menuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-gray-800 p-4 z-50 shadow-md">
//           <ul className="flex flex-col space-y-4">
//             <li><Link to="/" onClick={toggleMenu} className="home mx-6">Home</Link></li>
//             <li><Link to="/blog" onClick={toggleMenu} className="mx-6">Blog</Link></li>
//             <li><Link to="/signup" onClick={toggleMenu} className="mx-6 bg-black py-2 px-8 rounded-md text-white">Sign Up</Link></li>
//             <li><Link to="/login" onClick={toggleMenu} className="mx-6">Login</Link></li>
//           </ul>
//         </div>
//       )}

//     </div>
//   )
// }

// export default Header
