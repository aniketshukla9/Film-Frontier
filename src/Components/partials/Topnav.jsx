import axios from '../../Utils/Axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimg from '/noimg.jpg'

const Topnav = () => {
    const [query , setquery] = useState("");
    const [searches , setsearches] = useState([]);
    
  const GetSerches = async () => {
  try {
    const {data} = await axios.get(`/search/multi?query=${query}`);
    setsearches(data.results);
  } catch (error) {
    console.log("Error: ", error);
  }
};

  useEffect(() => {
    GetSerches();
  }, [query]); 
  
  return (
    <div className='w-full h-[10vh]  relative flex justify-start pl-[20%] items-center'>
        <i className="text-3xl  text-zinc-400 ri-search-line"> </i>
          <input 
          onChange={(e) => setquery(e.target.value)}
          value = {query}
          className='w-[50%] mx-5 p-2 text-xl  text-zinc-100 outline-none   rounded-full border-none bg-transparent'
          type="text"
           placeholder=' search anything' 
        />

        {query.length > 0 && (
        <i 
        onClick={()=> setquery("")}
         className="text-3xl  text-zinc-400 ri-close-fill"
         ></i>
        )} 
        <div className='z-[100] w-[40%] ml-10 max-h-[50vh] absolute  rounded  bg-zinc-100 top-[90%] overflow-auto'>
          {searches.map((s,i)=>(
          <Link to= {`/${s.media_type}/details/${s.id}`}

          key={i} 
         className='hover:text-black text-zinc-700 w-full   duration-300 hover:bg-zinc-200 p-6 flex justify-start items-center border-b-2 border-zinc-300'>
          <img 
          className='w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg'
          src={
          s.backdrop_path || s.profile_path ?
          `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path }` : noimg} alt="" />
          <span>{s.original_title ||
           s.name ||
            s.title || 
            s.original }
          </span>
          </Link> 
          

         ))}
          
       </div>
    </div>
  );
};

export default Topnav;