import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../Utils/Axios';
import { useState } from 'react';
import Cards from './partials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


const People = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title ="Box Office | People";   

    const GetPeople = async () => { 
        try {
          const {data} = await axios.get(`/person/${category}?page=${page} `);
            console.log(data);
          if(data.results.length >0 ){
            setpeople((prevState) => [...prevState , ...data.results]);
            setpage(page+1);
          }else{
            sethasMore(false);
          }
        } catch (error) {
          console.log("Error: ", error);
        }
      };

      const refreshHandler = async()=> {
        if(people.length === 0){
          GetPeople();
        }else{
          setpage(1);
          setpeople([]);
          GetPeople();
        }
      };

      useEffect(()=>{
        refreshHandler();
      },[category])
      return people.length>0  ?  (
        <div className='w-screen h-screen '>
        <div className='w-full   flex justify-between items-center'>
            <h1 className='text-3xl px-6 font-semibold  text-zinc-100'>
            <i onClick={()=>navigate(-1) } className= "hover:text-[#5A2086] font-xl p-2 ri-arrow-left-line"></i>
                People
            </h1>
            <Topnav  />

           
        </div>

        <InfiniteScroll
          dataLength = {people.length}
          next={GetPeople}
          hasMore={true}
          loader={<h1 className=''>Loading...</h1>}
      >
        <Cards data={people} title="people"/>

        </InfiniteScroll>
    </div>
  ) : (
  <Loading/>
  );
}

export default People