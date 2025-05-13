import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "./slider.css";

import { EffectCards } from "swiper/modules";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiDjango,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import { useState } from "react";
function MySkills() {
  const [active, setActive] = useState(true);
  const Skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-600 text-[50px]" />,
      type: "Web Design Languages",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-600 text-[50px]" />,
      type: "Web Design Languages",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-[50px]" />,
      type: "language",
    },
    {
      name: "Create React App",
      icon: <FaReact className="text-cyan-400 text-[50px]" />,
      type: "library",
    },
    {
      name: "Vite",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[50px]"
          viewBox="0 0 128 128"
        >
          <defs>
            <linearGradient
              id="a"
              x1="6"
              x2="235"
              y1="33"
              y2="344"
              gradientTransform="translate(0 .937) scale(.3122)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#41d1ff" />
              <stop offset="1" stopColor="#bd34fe" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="194.651"
              x2="236.076"
              y1="8.818"
              y2="292.989"
              gradientTransform="translate(0 .937) scale(.3122)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffea83" />
              <stop offset=".083" stopColor="#ffdd35" />
              <stop offset="1" stopColor="#ffa800" />
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Z"
          />
          <path
            fill="url(#b)"
            d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Z"
          />
        </svg>
      ),
      type: "library",
    },
    {
      name: "Next JS",
      icon: <SiNextdotjs className=" text-[50px]" />,
      type: "framework",
    },
    {
      name: "Python",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[50px]"
          viewBox="0 0 128 128"
        >
          <linearGradient
            id="python-original-a"
            gradientUnits="userSpaceOnUse"
            x1="70.252"
            y1="1237.476"
            x2="170.659"
            y2="1151.089"
            gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          >
            <stop offset="0" stop-color="#5A9FD4" />
            <stop offset="1" stop-color="#306998" />
          </linearGradient>
          <linearGradient
            id="python-original-b"
            gradientUnits="userSpaceOnUse"
            x1="209.474"
            y1="1098.811"
            x2="173.62"
            y2="1149.537"
            gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          >
            <stop offset="0" stop-color="#FFD43B" />
            <stop offset="1" stop-color="#FFE873" />
          </linearGradient>
          <path
            fill="url(#python-original-a)"
            d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
            transform="translate(0 10.26)"
          />
          <path
            fill="url(#python-original-b)"
            d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
            transform="translate(0 10.26)"
          />
          <radialGradient
            id="python-original-c"
            cx="1825.678"
            cy="444.45"
            r="26.743"
            gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#B8B8B8" stop-opacity=".498" />
            <stop offset="1" stop-color="#7F7F7F" stop-opacity="0" />
          </radialGradient>
          <path
            opacity=".444"
            fill="url(#python-original-c)"
            d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
          />
        </svg>
      ),
      type: "language",
    },
    {
      name: "Django",
      icon: <SiDjango className="text-green-700 text-[50px]" />,
      type: "framework",
    },
    {
      name: "SQL",
      icon: <SiMysql className="text-blue-500 text-[50px]" />,
      type: "Database",
    },
    {
      name: "Material UI",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[50px]"
          viewBox="0 0 128 128"
        >
          <path
            fill="#1FA6CA"
            d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"
          />
          <path
            fill="#1C7FB6"
            d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
          />
          <path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2L48 77.8z" />
          <path
            fill="#1C7FB6"
            d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
          />
        </svg>
      ),
      type: "library",
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-purple-600 text-[50px]" />,
      type: "library",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400 text-[50px]" />,
      type: "library",
    },
    {
      name: "Redux",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[50px]"
          viewBox="0 0 128 128"
        >
          <path
            fill="#764abc"
            d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"
          />
        </svg>
      ),
      type: "library",
    },
  ];
  const skillTypes = [
    "Web Design Languages",
    "language",
    "framework",
    "library",
    "Database",
  ];

  return (
    <div className="truncate">
      <h1 className="text-2xl  font-bold">My Skills : </h1>
      {active && (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper mt-5"
        >
          {Skills.map((skill, index) => (
            <SwiperSlide>
              <div className="relative w-full h-full">
                <p className="absolute bottom-5 left-[50%] translate-[-50%] w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                  {index + 1}
                </p>
                <div className="flex justify-center items-center flex-col gap-5  w-full h-full ">
                  <span>{skill.icon}</span>
                  <h1>{skill.name}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {!active && (
        <div className="">
          {skillTypes.map((type) => (
            <>
              <h1 className="text-2xl  my-5 capitalize">{type} :</h1>
              <div className="flex  p-4 bg-[var(--background-color)] flex-wrap">
                {Skills.filter((skill) => skill.type === type).map(
                  (skill, index) => (
                    <div key={index} className="flex-1 justify-items-center">
                      {skill.name}
                      <p className="my-4">{skill.icon}</p>
                    </div>
                  )
                )}
              </div>
            </>
          ))}
        </div>
      )}
      <div className="text-center mt-9">
        <button
          className="bg-yellow-500 hover:bg-yellow-600  font-semibold py-4 px-8 rounded "
          onClick={() => setActive(!active)}
        >
          {active ? "Browse Technologies" : "View Gallery"}
        </button>
      </div>
    </div>
  );
}

export default MySkills;
