import {React,  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncloadpeople, removepeople } from '../store/actions/peopleActions';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from '../Components/partials/Dropdown';
import { useState } from 'react';
const Peopledetails = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const { id } = useParams();
  const {info} = useSelector(state => state.people);
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie")
  console.log(info)


  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);
  return info ? (
         <div className='px-[10%] w-screen h-[200vh] bg-[#1F1E24]  '>
            {/* part 1 navigation */}
        <nav className='w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-2xl'>
          <Link>
            <i onClick={() => navigate(-1)}
              className="hover:text-[#5A2086] font-xl p-2 ri-arrow-left-line"></i>
          </Link>
        </nav>
         
         
        <div className='w-full flex'>
          {/* part 2 left poster and details */}
          <div className='w-[20%] ' >
          <img className='h-[35vh] ml-3 shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/original/${
              info.detail.profile_path}`} alt="" />

          <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500' />
          {/* social media links */}
          <div className='text-2xl flex gap-x-5 text-white'>  
          <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}>
            <i className="ri-earth-fill"></i>
            </a>
            <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
            <i className="ri-facebook-circle-fill"></i>
            </a>
            <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
            <i className="ri-instagram-fill"></i>
            </a>
            <a target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}>
            <i className="ri-twitter-x-fill"></i>
            </a>
          
          </div>

          {/* personal information */}
          <h1 className='text-2xl text-zinc-400 font-semibold my-3'> Personal Info</h1>
            <h1 className='text-lg text-zinc-400 font-semibold '> Known For</h1>
            <h1 className=' text-zinc-400 '> {info.detail.known_for_department}</h1>
            <h1 className=' text-zinc-400 mt-3 '> Gender</h1>
            <h1 className=' text-zinc-400 '> {info.detail.gender === 2 ? "Male" : "Female"}</h1>
            <h1 className=' text-zinc-400 mt-3 '> Birthday</h1>
            <h1 className=' text-zinc-400 '> {info.detail.birthday}</h1>
            <h1 className=' text-zinc-400 mt-3 '> Deathday</h1>
            <h1 className=' text-zinc-400 '> {info.detail.deathday ? info.detail.deathday : "Fucking Alive" }</h1>
            <h1 className=' text-zinc-400 mt-3 '> Place Of Birth</h1>
            <h1 className=' text-zinc-400 '> {info.detail.place_of_birth }</h1>
            <h1 className=' text-zinc-400 mt-3 '>Also known as</h1>
            <h1 className=' text-zinc-400 '> {info.detail.also_known_as.join(", ") }</h1>
          </div>

          {/* part 3  right Details and information*/}
          <div className='w-[80%] ml-[5%]'>
          <h1 className=' text-zinc-100 text-6xl font-black my-3'> {info.detail.name}</h1>
            <h1 className='text-xl text-zinc-300 font-semibold mt-7 '>Biography</h1>
            <p className='text-zinc-400 my-1'>{info.detail.biography}</p>
            <h1 className='text-xl text-zinc-300 font-semibold mt-10 '>Appeared On</h1>
            <HorizontalCards data={info.combinedcredits.cast}/>
           
            <div className='w-full flex items-center justify-between'>
            <h1 className=' text-zinc-200  text-3xl font-semibold mt-5'> Acting</h1>
            <Dropdown title= "Category" options={["movie"]} func={(e) => setcategory(e.target.value)}/>
            </div>
            <div className='list-disc text-lg text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl  shadow-[rgba(255,255,255,255.3)] mt-5 border-2 border-zinc-700 p-5 '>
              {info[category + "credits"].cast.map((c,i)=> (
              <li key={i} className='hover:text-white rounded p-5 hover:bg-[#19191d] dureation-300 cursor-pointer'> 
              <Link to={`/${category}/details/${c.id}`} className=''> 
              <span>  { c.name ||
                c.title ||
                c.original_name ||
                c.original_title  }  </span>
              <span className='block'>{c.character}</span>
              </Link>
              </li>
             ))}
            
            </div>
          </div>
        </div>
    </div>
  ) : <Loading/>
}

export default Peopledetails