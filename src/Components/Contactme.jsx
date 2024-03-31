import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Contactme = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[10%] w-screen h-full bg-[#1F1E24]  ">
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-2xl">
        <Link>
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#5A2086] font-xl p-2 ri-arrow-left-line"
          ></i>
        </Link>
      </nav>
      <div className="w-full flex">
        <div>
          <img
            className="h-[40vh]    shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]"
            src="/mario.gif"
            alt=""
          />

          <hr className="mt-5 mb-5 border-none h-[1px] bg-zinc-500" />
          <div className="text-2xl flex gap-x-5 ml-3 text-white">
            <a target="_blank" href="https://github.com/aniketshukla9">
              <img
                className="w-[8vh]"
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt=""
              />
            </a>
            <a target="_blank" href="www.linkedin.com/in/aniket-shukla-connect">
              <img
                className="w-[8vh]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=aniket.shukla.connect@gmail.com&hl=en"
            >
              <img
                className="w-[8vh]"
                src="https://static-00.iconduck.com/assets.00/gmail-icon-2048x2048-a884vvkv.png"
                alt=""
              />
            </a>
            {/* Instagram link removed */}
            <a target="_blank" href="https://twitter.com/aniket_shukla_c">
              <img
                className="w-[8vh]"
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* asc */}
        <div className="w-[70%] ml-[5%]">
          <h1 className=" text-zinc-100 text-6xl font-black my-3">
            {" "}
            Aniket Shukla
          </h1>

          <h1 className="text-xl text-zinc-300 font-semibold mt-7 ">Summary</h1>
          <p className="text-white ">
            As a full stack software developer, I possess expertise in both
            front-end and back-end development, demonstrating proficiency in
            crafting user-facing interfaces as well as designing and
            implementing server-side logic. My skill set extends beyond
            technical prowess, encompassing effective coordination of diverse
            teams and fostering collaboration across various functions within a
            project.
          </p>
          <h1 className="text-xl text-zinc-300 font-semibold mt-10 ">
            Technical Skills
          </h1>
          <p className="w-[50%] text-white">
            ● Frontend - JavaScript , React Js , TypeScript , Nextjs13, HTML,
            CSS
          </p>
          <p className="w-[50%] text-white">
            ● Backend - Node.js , Express.js ,TypeScript
          </p>
          <p className="w-[50%]  text-white">
            ● DevOps - Docker , Kubernetes , AWS
          </p>
          <p className="w-[50%] text-white">
            ● Database - mySql , MongoDB , PostgreSQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
