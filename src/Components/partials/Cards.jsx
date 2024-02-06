import React from 'react'
import { Link } from 'react-router-dom'
import noimg from '/noimg.jpg'

const Cards = ({data, title}) => {
  
  return (
    <div className=' flex flex-wrap w-[full] px-[10%] bg-[#1f1e24]'>
        {data.map((c,i) =>
         <Link to={`/${c.media_type || title}/details/${c.id}` } className='relative w-[25vh] mr-[5%] mb-[5%]' key={i} >
            <img className='h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]' src={c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${
            c.poster_path || c.backdrop_path || c.profile_path}`: noimg } alt="" />

        <h1 className='text-2xl text-zinc-200 mt-3 font-semibold '>
        {c.original_title ||
           c.name ||
            c.title || 
            c.original }
        </h1>
        {c.vote_average && (
          <div className='absolute text-white right-[-10%] bottom-[25%] rounded-full text-xl font-semibold bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center '>  {(c.vote_average*10).toFixed()} <sup>%</sup> </div>
        )}
      

        </Link>)}
    </div>
  )
}

export default Cards