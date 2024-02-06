import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../Utils/Axios';
import { useState } from 'react';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {

  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title ="Box Office | Trending  " +category.toUpperCase();

    const GetTrending = async () => {
        try {
          const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}  `);

          if(data.results.length >0 ){
            settrending((prevState) => [...prevState , ...data.results]);
            setpage(page+1);
          }else{
            sethasMore(false);
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      };

      const refreshHandler = async()=> {
        if(trending.length === 0){
          GetTrending();
        }else{
          setpage(1);
          settrending([]);
          GetTrending();
        }
      };

      useEffect(()=>{
        refreshHandler();
      },[category,duration])
    
    return trending.length>0  ?  (
        <div className='w-screen h-screen '>
        <div className='w-full   flex justify-between items-center'>
            <h1 className='text-3xl px-6 font-semibold  text-zinc-100'>
            <i onClick={()=>navigate(-1) } className= "hover:text-[#5A2086] font-xl p-2 ri-arrow-left-line"></i>
                Trending
            </h1>
            <Topnav  />

            <Dropdown title="Category" options={["movie","tv" ,"all" ]} func={(e) => setcategory(e.target.value) } />
            <div className='w-[1%]'> </div>
            <Dropdown  title="Duration" options={["week","day"]} func={(e) => setduration(e.target.value) }  />   
            
        </div>

        <InfiniteScroll
          dataLength = {trending.length}
          next={GetTrending}
          hasMore={true}
          loader={<h1 className=''>Loading...</h1>}
      >
        <Cards data={trending} title={category}/>

        </InfiniteScroll>





    </div>
  ) : (
  <Loading/>
  );
}

export default Trending;