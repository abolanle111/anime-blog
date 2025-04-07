import React from "react";
import Bg from "../assets/bg.png";
import Akame from "../assets/akame.png";
import AOT from "../assets/AOT.png";
import Chance from "../assets/chance.png";
import Geass from "../assets/geass.png";
import Stone from "../assets/stone.png";
import Love from "../assets/love.png";
import Clippy from "../assets/clippy.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import your desired icon
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import your desired icon
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import your desired icon
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import your desired icon
// import Footer from "../default/Footer";

function Home() {
  return (
    <div>
      <section className="relative h-screen">
        <img
          src={Bg}
          alt="background-image"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Diagonal Clipped Overlay */}
        <div
          className="absolute inset-1 z-10"
          style={{
            clipPath: "polygon(53% 0, 94% 0, 80% 100%, 38% 100%)",
          }}
        >
          <img
            src={Clippy} // Replace with the actual image source
            alt="diagonal-overlay"
            className=" object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-white p-8 ">
          <h1 className="lg:text-6xl text-3xl lg:font-semi-bold font-medium tracking-widest">
            Welcome to Gates
          </h1>
          <p className="text-wrap text-zinc-300 leading-6">
            Get the latest news on your favourites animes, manga and manhwa
            around the world
          </p>
          <div className="flex items-center lg:space-x-6 space-x-2 bg-zinc-300 py-2 px-2">
            <button className="bg-black lg:py-2 lg:px-8 px-4 py-2 text-zinc-300">
              SUBSCRIBE
            </button>
            <input
              type="email"
              placeholder="enter your email"
              className="outline-none bg-transparent w-3/4 text-base"
            />
            <FontAwesomeIcon icon={faArrowRight} className="text-black " />
          </div>
          <div className="relative ">
            <ul className=" text-zinc-200 space-y-1">
              <li>Action</li>
              <li>Comedy</li>
              <li>Drama</li>
              <li>Military</li>
              <li>Fantasy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid p-12">
        <h1 className="font-bold text-2xl border-b-2 mb-4">New & Trendy</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <img
            src={Akame}
            alt="Akame ga kill"
            className="w-full object-cover"
          />
          <div class="bg-zinc-100 p-5 h-full flex flex-col items-center">
            <div class="flex w-1/2 justify-between mb-4">
              <p class="text-zinc-600">Action</p>
              <p class="text-zinc-600">.2 Months Ago</p>
            </div>

            <h2 class="font-bold text-2xl mb-4">Akame ga kill</h2>

            <div class="flex w-1/2 gap-4">
              <p class="flex-1 text-zinc-700 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
                quis. Et, repellendus. Nulla aliquid facere beatae porro! Hic,
                voluptate nesciunt.
              </p>
            </div>

            <div class="flex w-1/2 justify-between mt-4">
              <p class="text-zinc-600">12 mins read</p>
              <button class="font-bold text-black hover:underline">
                Read full
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center border-t-2 lg:border-t-0">
        <div class="bg-zinc-100 p-5 h-full flex flex-col items-center">
            <div class="flex w-1/2 justify-between mb-4">
              <p class="text-zinc-600">Action</p>
              <p class="text-zinc-600">.2 Months Ago</p>
            </div>

            <h2 class="font-bold text-2xl mb-4">Akame ga kill</h2>

            <div class="flex w-1/2 gap-4">
              <p class="flex-1 text-zinc-700 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
                quis. Et, repellendus. Nulla aliquid facere beatae porro! Hic,
                voluptate nesciunt.
              </p>
            </div>

            <div class="flex w-1/2 justify-between mt-4">
              <p class="text-zinc-600">12 mins read</p>
              <button class="font-bold text-black hover:underline">
                Read full
              </button>
            </div>
          </div>
          <img
            src={AOT}
            alt="attack on titans"
            className="w-full object-cover"
          />
        </div>
      </section>

      <section className="lg:p-12 p-6">
        <div className="flex justify-between border-b-2 mb-6">
          <h2 className="pt-4 font-semibold text-lg tracking-wide">
            Now Trending
          </h2>
          <div>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="mr-2 text-zinc-300 text-lg"
            />
            <FontAwesomeIcon icon={faCircleArrowRight} className="text-lg " />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly gap-8">
          <div class="max-w-sm mx-auto bg-white rounded-sm  overflow-hidden">
            <img src={AOT} alt="Movie" className="w-full h-82 object-cover" />
            <div class="p-4 space-y-3">
              <div class="flex text-sm text-gray-500 space-x-3">
                <span>History</span>
                <span>·</span>
                <span>1 Month Ago</span>
              </div>
              <h2 class="text-xl font-bold text-gray-900">Attack On Titan</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                nisi libero quibusdam, rerum eius fugit earum. Veniam sit
                corrupti, consequatur autem quo minus.
              </p>
              <div class="flex justify-between items-center text-sm text-gray-500">
                <span>12 Min Read</span>
                <a href="/" class="text-black hover:underline font-semibold">
                  Read Full →
                </a>
              </div>
            </div>
          </div>

          <div class="max-w-sm mx-auto bg-white rounded-sm overflow-hidden">
            <img src={Stone} alt="Movie" className="w-full h-82 object-cover" />
            <div class="p-4 space-y-3">
              <div class="flex text-sm text-gray-500 space-x-3">
                <span>History</span>
                <span>·</span>
                <span>1 Month Ago</span>
              </div>
              <h2 class="text-xl font-bold text-gray-900">Dr Stone</h2>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                similique reiciendis culpa saepe, ut commodi ad, necessitatibus,
                accusamus voluptatum atque dolores officia.
              </p>
              <div class="flex justify-between items-center text-sm text-gray-500">
                <span>12 Min Read</span>
                <a href="/" class="text-black hover:underline font-semibold">
                  Read Full →
                </a>
              </div>
            </div>
          </div>

          <div class="max-w-sm mx-auto bg-white rounded-sm overflow-hidden">
            <img
              src={Chance}
              alt="Movie"
              className="w-full h-82 object-cover"
            />
            <div class="p-4 space-y-3">
              <div class="flex text-sm text-gray-500 space-x-3">
                <span>History</span>
                <span>·</span>
                <span>1 Month Ago</span>
              </div>
              <h2 class="text-xl font-bold text-gray-900">Second Chance</h2>
              <p class="text-gray-600 font-medium">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae incidunt cumque doloremque aliquam et beatae,
                maiores tenetur consectetur laborum dolorum aspernatur vitae.
              </p>
              <div class="flex justify-between items-center text-sm text-gray-500">
                <span>12 Min Read</span>
                <a href="/" class="text-black hover:underline font-semibold">
                  Read Full →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8">
        <div className="flex justify-between border-b-2 mb-6">
          <h2 className="pt-4 font-semibold text-lg tracking-wide">
            Short Reads
          </h2>
          <div>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="mr-2 text-zinc-300 text-lg"
            />
            <FontAwesomeIcon icon={faCircleArrowRight} className="text-lg " />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-6 gap-6 max-w-full rounded-sm overflow-hidden shadow-sm bg-zinc-50 mb-6 ">
          <div className="flex w-1/3">
            <img
              src={Akame}
              alt="card-image"
              className="lg:w-1/3 object-cover"
            />
            <div className="flex p-6 flex-col justify-evenly">
              <h2 class="text-2xl font-bold mb-2 text-gray-800">
                Akame ga Kill:Season Finale
              </h2>
              <p class="text-gray-600 text-base">
                A dark storyline set in a fantasy world with supernatural
                elements, and themes of warfare and rebellion.
              </p>
            </div>
          </div>

          <div className="flex w-1/3">
            <img src={AOT} alt="card-image" className="lg:w-1/3 object-cover" />
            <div className="flex p-6 flex-col justify-evenly">
              <h2 class="text-2xl font-bold mb-2 text-gray-800">
                Attack on Titans:Season Finale
              </h2>
              <p class="text-gray-600 text-base">
                A dark storyline set in a fantasy world with supernatural
                elements, and themes of warfare and rebellion.
              </p>
            </div>
          </div>

          <div className="flex w-1/3">
            <img
              src={Geass}
              alt="card-image"
              className="lg:w-1/3 object-cover"
            />
            <div className="flex p-6 flex-col justify-evenly">
              <h2 class="text-2xl font-bold mb-2 text-gray-800">
                Code Geass:Season Finale
              </h2>
              <p class="text-gray-600 text-base">
                A dark storyline set in a fantasy world with supernatural
                elements, and themes of warfare and rebellion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-8">
        <div className=" border-b-2">
          <h2 className="text-xl font-bold">Blogs</h2>
        </div>

        <div className="flex border-b-2 ">
          <ul className="flex flex-wrap justify-between gap-5 mb-6 mt-6">
            <li className="text-lg font-semibold underline">Action</li>
            <li className="text-lg font-semibold">Comedy</li>
            <li className="text-lg font-semibold">Drama</li>
            <li className="text-lg font-semibold">Military</li>
            <li className="text-lg font-semibold">Fantasy</li>
          </ul>
        </div>
      </section>

      <section className="flex lg:flex-row flex-col gap-4 justify-between p-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 p-4 border-2">
          <div class="flex flex-col items-center text-center">
            <img
              src={AOT}
              alt="Main"
              class="w-full h-96 object-cover rounded-lg mb-4"
            />
            <p className="text-zinc-400">1 Month ago</p>
            <h2 className="text-2xl font-bold">Attack on Titans</h2>
            <p class="text-gray-700 text-base text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
              Labore ex blanditiis sunt nisi optio fugiat deserunt dolorum alias{" "}
              <br />
              laborum, unde sit maiores commodi cum aspernatur, <br /> saepe
              corporis aliquid dolorem! Dolor!
            </p>
          </div>

          {/* Right Side: Multiple Images with Titles  */}
          <div class="flex  flex-col gap-6">
            {/* Item 1 */}
            <div class="flex items-center space-x-4">
              <img
                src={AOT}
                alt=""
                class="w-20 h-20  object-cover rounded-lg"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Attack on Titan: Season 7
                </h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>

            {/* <!-- Item 2 --> */}
            <div class="flex items-center space-x-4">
              <img
                src={Stone}
                alt=""
                class="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Demon slayer: <br />
                  Hashira training Arc
                </h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>

            {/* <!-- Item 3 --> */}
            <div class="flex items-center space-x-4">
              <img
                src={Geass}
                alt=""
                class="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Code Geass: Season 2
                </h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>

            {/* <!-- Item 4 --> */}
            <div class="flex items-center space-x-4">
              <img
                src={Love}
                alt=""
                class="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Fate/Stay Night: Season 4
                </h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>

            {/* <!-- Item 5 --> */}
            <div class="flex items-center space-x-4">
              <img
                src={Akame}
                alt=""
                class="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Akame ga Kill:Season Finale
                </h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 p-6">
          <div class="flex flex-col space-y-4">
            {/* Item 1 */}
            <div class="flex items-center space-x-4">
              <img src={AOT} alt="" class="w-20 h-20 object-cover rounded-lg" />
              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Attack on Titan: <br /> Season 7
                </h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>

            {/* <!-- Item 2 --> */}
            <div class="flex items-center space-x-4">
              <img
                src={Stone}
                alt=""
                class="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Demon slayer: <br />
                  Hashira training Arc
                </h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>

            {/* <!-- Item 3 --> */}
            <div class="flex items-center space-x-4">
              <img
                src={Geass}
                alt=""
                class="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Code Geass: <br /> Season 2
                </h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>

            {/* <!-- Item 4 --> */}
            <div class="flex items-center space-x-4">
              <img
                src={Love}
                alt=""
                class="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Fate/Stay Night: <br /> Season 4
                </h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>

            {/* <!-- Item 5 --> */}
            <div class="flex items-center space-x-4">
              <img
                src={Akame}
                alt=""
                class="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">Akame ga Kill</h3>
                <p class="text-sm text-gray-600">10, Oct. 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
