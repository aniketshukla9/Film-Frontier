import {React,  useEffect } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Contactme = () => {
    const navigate = useNavigate();
  return(
   <div className='px-[10%] w-screen h-full bg-[#1F1E24]  '>
            <nav className='w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-2xl'>
          <Link>
            <i onClick={() => navigate(-1)}
              className="hover:text-[#5A2086] font-xl p-2 ri-arrow-left-line"></i>
          </Link>
        </nav>
        <div className='w-full flex'>
        <div  >
          <img className='h-[40vh]    shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]' src="/mario.gif" alt="" />

          <hr className='mt-5 mb-5 border-none h-[1px] bg-zinc-500' />
          <div className='text-2xl flex gap-x-5 ml-3 text-white'>  
          <a target="_blank" href="https://github.com/abhirishoo">
           <img className="w-[5vh]" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="" />
            </a>
          <a target="_blank" href="https://www.linkedin.com/in/abhirishoo/">
           <img className="w-[5vh]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png" alt="" />
            </a>
            <a target="_blank" href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=abhi.rishoo2003@gmail.com&hl=en">
            <img className="w-[5vh]" src="https://static-00.iconduck.com/assets.00/gmail-icon-2048x2048-a884vvkv.png" alt="" />
            </a>
            <a target="_blank" href="https://www.instagram.com/abhijeet_rishoo/">
            <img className="w-[5vh]" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="" />
            </a>
            <a target="_blank" href="https://twitter.com/abhi_rishoo">
            <img className="w-[6vh]" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="" />
            </a>
         </div>
        
          
           </div> 
            {/* asc */}
            <div className='w-[70%] ml-[5%]'>
          <h1 className=' text-zinc-100 text-6xl font-black my-3'> Abhijeet Rishoo</h1>
          
            <h1 className='text-xl text-zinc-300 font-semibold mt-7 '>Summary</h1>
            <p className='text-white '>Full stack software developer with expertise in front-end and back-end development, skilled in
            coordinating diverse teams and collaboration across functions.</p>
            <h1 className='text-xl text-zinc-300 font-semibold mt-10 '>Technical Skills</h1>
            <p className='w-[50%] text-white'>
                ● Frontend - JavaScript , React Js , TypeScript , Nextjs13
            </p>
            <p className='w-[50%] text-white'>
                ● Backend - Node.js , Express.js ,TypeScript
            </p>
            <p className='w-[50%]  text-white'>
                ● DevOps - Docker , Kubernetes , AWS
            </p>
            <p className='w-[50%] text-white'>
                ● Database - mySql , MongoDB , PostgreSQL
            </p>


            
          
            </div>
          </div> 
        </div>

        
        
  )  
}

export default Contactme;