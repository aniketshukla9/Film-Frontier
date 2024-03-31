import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../Utils/Axios";
import { useState } from "react";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Tvshows = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "Film Frontier | Tvshows  " + category;

  const GetTvshow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page} `);
      console.log(data);
      if (data.results.length > 0) {
        settv((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = async () => {
    if (tv.length === 0) {
      GetTvshow();
    } else {
      setpage(1);
      settv([]);
      GetTvshow();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return tv.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="w-full   flex justify-between items-center">
        <h1 className="text-3xl px-6 font-semibold  text-zinc-100">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#5A2086] font-xl p-2 ri-arrow-left-line"
          ></i>
          Tvshows
        </h1>
        <Topnav />

        <Dropdown
          title="Category"
          options={["airing_today", "on_the_air", "popular", "top_rated"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[1%]"> </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTvshow}
        hasMore={true}
        loader={<h1 className="">Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;
