import React from "react";
import logo from "../assets/anime-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import your desired icon


function Footer() {
  return (
    <div className="bg-black text-white mt-5">
      <div className="flex justify-between items-center p-8 mr-20">
        <img src={logo} alt="logo" className="filter invert" />
        <div className="flex items-center space-x-6 bg-zinc-300 py-2 px-2">
          <button className="bg-black py-2 px-8 text-zinc-300">SUBSCRIBE</button>
          <input type="email" placeholder="enter your email" className="outline-none bg-transparent"/>
          <FontAwesomeIcon icon={faArrowRight} className="text-black " />
        </div>
      </div>

      <p className="w-1/4 leading-10 font-medium p-8 text-zinc-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
        debitis consectetur? Et ipsum, sed numquam perspiciatis nobis, dolores
        ducimus illo, a beatae voluptates asperiores. Quae, laudantium tempore
        error deleniti quas dolorem id doloribus, voluptates autem quam
      </p>

      <p className="copyright relative p-8">@Copyright2021 Gates</p>

    </div>
  );
}

export default Footer;
