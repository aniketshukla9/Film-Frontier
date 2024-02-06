import {React,  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadtv, removetv } from '../store/actions/tvActions';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import HorizontalCards from './partials/HorizontalCards';
import Trailer from './partials/Trailer';


const Tvdetails = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const { id } = useParams();
  const {info} = useSelector(state => state.tv);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info?(
    <div
     style={{
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path  })`,
          backgroundPosition:"top",
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat",

      }}
      className='relative  w-screen text-zinc-100 h-[250vh] px-[10%] '>
          {/* part 1 navigation */}
        <nav className='w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-2xl'>
          <Link>
            <i onClick={() => navigate(-1)}
              className="hover:text-[#5A2086] font-xl p-2 ri-arrow-left-line"></i>
          </Link>

          <a target="_blank" href={info.detail.homepage}>
            <i className="ri-external-link-fill"></i>
          </a>
          <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
            <i className="ri-earth-fill"></i></a>
          
          <a  target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>
            imdb  
          </a>


        </nav>
        {/* part 2 poster and details */}
        <div className='w-full flex'>
        <img className='h-[60vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path }`} alt="" />

          <div className=' mr-10 ml-[5%]'>
              <h1 className='mt-3 mb-5 text-5xl font-black text-white '>
                {info.detail.name ||
                info.detail.title ||
                info.detail.original_name ||
                info.detail.original_title  } 
                <small className='text-2xl font-bold text-zinc-200'>({info.detail.first_air_date.split("-")[0]})</small>
            </h1>
            <div className='flex items-center gap-x-3 '>
            <span className='rounded-full text-xl font-semibold bg-yellow-600 w-[5vh] h-[5vh] flex justify-center items-center '>  {(info.detail.vote_average*10).toFixed()} <sup>%</sup>
            </span>
            <h1 className='font-semibold text-2xl w-[60px] leading-6'>User Score</h1>
            <h1>{info.detail.release_date} </h1>
            <h1>{info.detail.genres.map(g => g.name).join(",")}</h1>
            </div>
          <h1 className='text-xl mt-5 font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>       

          <h1 className='text-2xl mt-5 mb-3  text-zinc-300'>Overview 
          </h1>       
          <p>{info.detail.overview} </p>
          <h1 className='text-2xl mt-5 mb-3  text-zinc-300'> TV Translated
          </h1> 
          <p className='mb-10'>{info.translations.join(", ")} </p>
          
          <Link  className='shadow-xl font-semibold p-4 bg-[#5A2086] rounded' to={`${pathname}/trailer`}>
          <i className="text-xl mr-1 ri-play-fill" ></i>
            Watch Trailer</Link>
        </div>
  
        </div>
            {/* part 3 */}
        <div>
          <div className='mt-5 mb-5 flex'>
            { info.watchproviders && 
            info.watchproviders.flatrate &&  (
              <div className='flex gap-x-5 items-center text-white'>
                <h1>Available on Platform</h1>
                {info.watchproviders.flatrate.map((w,i) => (   
                  <img 
                  key={i}
                  title={w.provider_name}
                  className='w-[5vh] h-[5vh] object-fit rounded-md' 
                  src={`https://image.tmdb.org/t/p/original/${
                    w.logo_path }`}  alt="" />
                ))} 
              </div>
              )}
          </div>
          <div className='mt-5 mb-5'>
            { info.watchproviders && 
            info.watchproviders.rent && (
              <div className='flex gap-x-5 items-center text-white'>
                <h1>Available to rent</h1>
                {info.watchproviders.rent.map((w,i) => (   
                  <img
                  key={i}
                  title={w.provider_name}
                  className='w-[5vh] h-[5vh] object-fit rounded-md' 
                  src={`https://image.tmdb.org/t/p/original/${
                    w.logo_path }`}  alt="" />
                ))}

              </div>
            ) } 
          </div>
          <div className='mt-5 mb-5'>
            { info.watchproviders && 
            info.watchproviders.buy && (  
              <div className='flex gap-x-5 items-center text-white'>
                  <h1>Available to buy</h1>
                  {info.watchproviders.buy.map((w,i) => (   
                    <img
                    key={i}
                    title={w.provider_name}
                    className='w-[5vh] h-[5vh] object-fit rounded-md' 
                    src={`https://image.tmdb.org/t/p/original/${
                      w.logo_path }`}  alt="" />
                  ))}
              </div>
            )}
          </div>

        </div>
         {/* part 4 */}
         <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500' />
          <h1 className='text-3xl mt-5 font-bold text-white '> Seasons</h1>
                    
        <HorizontalCards data = {info.detail.seasons} />
        

          {/* part 5 recomendation and similar stuff */}
          <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500' />
          <h1 className='text-3xl mt-5 font-bold text-white '> Recommendations & Similar Stuff</h1>
        
        <HorizontalCards data = {info.recommendations.length > 0 ? info.recommendations : info.similar} />
        
        <Outlet/>
  
    
  </div>

  ) : (
    <Loading />);
}

export default Tvdetails