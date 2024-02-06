import React from 'react'
import { Link } from 'react-router-dom'
import noimg from '/noimg.jpg'

const HorizontalCards = ({data }) => {
  return (
    
        <div className='w-[100%]  flex  overflow-y-hidden mb-5 p-5'>
            {data.length > 0 ? data.map((d,i)=>
            <Link to={`/${d.media_type}/details/${d.id}`} key={i} className='text-white min-w-[20%] bg-zinc-900  mr-5 mb-5'>
               
               
                <img className='w-full h-[27vh] object-cover object-top ' src={d.backdrop_path || d.poster_path ?  `https://image.tmdb.org/t/p/original/${ d.backdrop_path || d.poster_path }`: noimg} alt="" 
                />
            <div className='text-white p-3 h-[55%] ove'>
            <h1 className='text-xl font-semibold '>
             {d.original_title ||
             d.name ||
             d.title || 
             d.original }
         </h1>  
        <p className=''>
            {d.overview.slice(0,100)} ... 
            <span className='text-zinc-400'> more
            </span>
        </p>
        </div>
            
    </Link>
            ): <h1 className='text-3xl text-white font-black text-center mt-5 '>Nothing to show</h1>  } 

        </div>    
  )
}

export default HorizontalCards