import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = ({ isAuth, setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/dashboard");
      // navigate("/dashboard"); //redirect to dashboard
    } catch (err) {
      console.error(err);
    }
    
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative h-screen w-full bg-cover bg-center overflow-hidden sign-bg">
      <div className="flex flex-col items-center justify-center h-screen text-zinc-300">
        {/* Email Input */}
        <div className="flex items-center lg:space-x-6 bg-zinc-300 lg:py-2 lg:px-2 mb-6 w-80">
          <button className="bg-black py-4 px-10 lg:py-2 lg:px-4 text-zinc-300">
            Email
          </button>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent  text-black"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center lg:space-x-6 bg-zinc-300 lg:py-2 lg:px-2 mb-6 w-80">
          <button className="bg-black py-4 px-10 lg:py-2 lg:px-4 text-zinc-300">
            Password
          </button>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none bg-transparent px-2 text-black"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={signIn}
          className="bg-transparent text-white font-medium border-2 px-5 py-2 rounded-md"
        >
          Login
        </button>

        {/* Sign In with Google Button */}
        <button
          onClick={signInWithGoogle}
          className="bg-transparent text-white font-medium border-2 px-5 py-2 mt-4 rounded-md"
        >
          LogIn with Google
        </button>

        {/* Log Out Button
        <button
          onClick={logout}
          className="bg-transparent text-white font-medium border-2 px-5 py-2 mt-4 rounded-md"
        >
          Log Out
        </button> */}
      </div>
    </div>
  );
};

export default Login;


