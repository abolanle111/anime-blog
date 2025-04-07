import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./default/Header";
import Home from "./pages/Home";
// import Footer from "./default/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Blogdetail from "./pages/Blogdetail";
import Dashboard from "./pages/Dashboard";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <div>
      <Router>
        <div className="w-full">
          <Header />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blog" element={<Blogdetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
      {/* <Home /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
