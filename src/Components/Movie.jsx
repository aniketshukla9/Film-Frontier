import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../Utils/Axios';
import { useState } from 'react';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const Movie = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("top_rated");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title ="Box Office | Movies " + category;   

    const GetMovie = async () => { 
        try {
          const {data} = await axios.get(`/movie/${category}?page=${page} `);
            console.log(data);
          if(data.results.length >0 ){
            setmovie((prevState) => [...prevState , ...data.results]);
            setpage(page+1);
          }else{
            sethasMore(false);
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      };

      const refreshHandler = async()=> {
        if(movie.length === 0){
          GetMovie();
        }else{
          setpage(1);
          setmovie([]);
          GetMovie();
        }
      };

      useEffect(()=>{
        refreshHandler();
      },[category])

      return movie.length>0  ?  (
        <div className='w-screen h-screen '>
        <div className='w-full   flex justify-between items-center'>
            <h1 className='text-3xl px-6 font-semibold  text-zinc-100'>
            <i onClick={()=>navigate(-1) } className= "hover:text-[#5A2086] font-xl p-2 ri-arrow-left-line"></i>
                Movies
            </h1>
            <Topnav  />

            <Dropdown title="Category" options={["popular","top_rated" , "up_coming","now_playing" ]} func={(e) => setcategory(e.target.value) } />
            <div className='w-[1%]'> </div>
            
        </div>

        <InfiniteScroll
          dataLength = {movie.length}
          next={GetMovie}
          hasMore={true}
          loader={<h1 className=''>Loading...</h1>}
      >
        <Cards data={movie} title="movie"/>

        </InfiniteScroll>
    </div>
  ) : (
  <Loading/>
  );
}

export default Movie;