import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./default/Header";
import Home from "./pages/Home";
import Footer from "./default/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Blogdetail from "./pages/Blogdetail";

function App() {
  return (
    <div>
      <Router>
        <div className="w-full">
          <Header />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blog" element={<Blogdetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
      {/* <Home /> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
