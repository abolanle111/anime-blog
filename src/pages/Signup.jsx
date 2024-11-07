import React from "react";

// import Header from '../default/Header'

const Signup = () => {
  return (
    <div className="sign-bg">
      <div className="flex flex-col items-center justify-center h-screen text-zinc-300">
        
        {/* Sign-up form goes here */}
        <div className="flex items-center space-x-6 bg-zinc-300 py-2 px-2 mb-6 w-1/4">
          <button className="bg-black py-2 px-8 text-zinc-300">Name</button>
          <input type="email" placeholder="enter your name" className="outline-none bg-transparent"/>
        </div>
        <div className="flex items-center space-x-6 bg-zinc-300 py-2 px-2 mb-6 w-1/4">
          <button className="bg-black py-2 px-8 text-zinc-300">Email</button>
          <input type="email" placeholder="enter your email" className="outline-none bg-transparent"/>
        </div>
        <div className="flex items-center space-x-6 bg-zinc-300 py-2 px-2 mb-6 w-1/4">
          <button className="bg-black py-2 px-8 text-zinc-300">Password</button>
          <input type="email" placeholder="enter your password" className="outline-none bg-transparent"/>
        </div>
          <button className="bg-transparent text-white font-medium border-2 px-5 py-2 rounded-md">
            Sign Up
          </button>
        
      </div>
     </div>
  );
};

export default Signup;
