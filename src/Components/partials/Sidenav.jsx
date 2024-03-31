import axios from "../../Utils/Axios";
import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-[100%] bg-[#1f1e24] border-r-2 border-zinc-600 p-3">
      <div className="flex justify-center items-center mt-5 mb-5">
        <img
          className="w-[50%] -mx-4   "
          src="/icon-removebg-preview.png"
          alt=""
        />
        <h1 className="font-black text-white text-5xl">
          {" "}
          Film <b></b> Frontier
        </h1>
      </div>

      <nav className="flex flex-col text-zinc-300 text-lg gap-1">
        <h1 className="text-white font-semibold text-xl  ml-5 mb-2 ">
          New Feeds{" "}
        </h1>
        <Link
          to="/trending"
          className="hover:bg-[#5A2086] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#5A2086] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#5A2086] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to="/tv"
          className="hover:bg-[#5A2086] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-tv-2-fill"></i> TV shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#5A2086] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-team-fill"></i> People
        </Link>
        <hr className="border-none h-[1px] bg-zinc-400" />
        <h1 className="text-white font-semibold text-lg mt-4 ml-4 gap-1 ">
          Website Information{" "}
        </h1>
        <Link
          to="/aboutus"
          className="hover:bg-[#5A2086] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-information-fill"></i> About Us
        </Link>
        <Link
          to="/contactme"
          className="hover:bg-[#5A2086] hover:text-white p-3 rounded-lg duration-300"
        >
          <i className="ri-phone-fill"></i> Contact Me
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
