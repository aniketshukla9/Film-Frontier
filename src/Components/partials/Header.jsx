import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
  return (
    <div style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.profile_path })`,
            backgroundPosition:"top",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat",

        }}
        className=' w-full h-[60vh]  flex flex-col justify-end items-start p-[5%]'>
        <h1 className='w-[70%] text-5xl font-black text-white'>
        {data.original_title ||
           data.name ||
            data.title || 
            data.original }
        </h1>
        <p className='w-[70%] mt-3 mb-3  text-white '>
            {data.overview.slice(0,300)} ... <Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-400'> more
            </Link>
        </p>
        <p className='text-white flex gap-1   '>
        <i className="text-yellow-500 ri-megaphone-fill"></i> {data.release_date || "No Information"}
        <i className="text-yellow-500 ml-5 ri-album-fill"></i>{data.media_type.toUpperCase()}
        </p>
        <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='p-3 text-white bg-[#5A2086] font-semibold mt-2 shadow-xl rounded'>
        <i className="text-xl mr-1 ri-play-fill" ></i> Watch Trailer</Link>
    </div>
  );
};

export default Header; 