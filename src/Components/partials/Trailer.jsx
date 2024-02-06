import React from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Notfound from '../Notfound';

const Trailer = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const  ytvideo = useSelector((state) => state[category].info.videos);
 
  return  (
    <div className=' absolute bg-[rgba(0,0,0,.8)] flex items-center justify-center top-0 left-0 w-screen h-screen'>
      <Link>
        <i onClick={() => navigate(-1)}
          className="absolute hover:text-[#5A2086] font-xl p-2 ri-close-fill text-3xl text-white right-[5%] top-[5%] "></i>
      </Link>
      {ytvideo ?(<ReactPlayer 
      controls
        height={800}
        width={1500}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
      ):(
        <Notfound/>
      )}
    </div>
  );
}

export default Trailer; 