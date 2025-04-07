import React from "react";
import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup,signOut } from "firebase/auth";

// import Header from '../default/Header'

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email)


  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="sign-bg relative h-screen w-full bg-cover bg-center">
      <div className="flex flex-col items-center justify-center h-screen text-zinc-300">
        
        {/* Sign-up form goes here */}
        <div className="flex items-center lg:space-x-6 bg-zinc-300 lg:py-2 lg:px-2 mb-6 w-80">
          <button className="bg-black py-4 px-10 lg:py-2 lg:px-8 text-zinc-300">Name</button>
          <input type="name" placeholder="enter your name"  onChange={(e) => setName(e.target.value)} className="outline-none bg-transparent text-black px-2"/>
        </div>
        <div className="flex items-center lg:space-x-6 bg-zinc-300 lg:py-2  lg:px-2 mb-6 w-80 ">
          <button className="bg-black py-4 px-10 lg:py-2 lg:px-8 text-zinc-300">Email</button>
          <input type="email" placeholder="enter your email"  onChange={(e) => setEmail(e.target.value)} className="outline-none bg-transparent text-black px-2"/>
        </div>
        <div className="flex items-center lg:space-x-6 bg-zinc-300 lg:py-2 lg:px-2 mb-6 w-80 ">
          <button className="bg-black py-4 px-10 lg:py-2 lg:px-8 text-zinc-300">Password</button>
          <input type="password" placeholder="enter password"  onChange={(e) => setPassword(e.target.value)} className="outline-none bg-transparent text-black px-2"/>
        </div>
          <button onClick={signIn} className="bg-transparent text-white font-medium border-2 px-5 py-2 rounded-md">
            Sign Up
          </button>

          <button onClick={signInWithGoogle} className="bg-transparent text-white font-medium border-2 px-5 py-2 mt-4 rounded-md">
            Sign In with Google
          </button>

          
        
      </div>
     </div>
  );
};

export default SignUp;
