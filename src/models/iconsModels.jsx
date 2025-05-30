import { FaBootstrap } from "react-icons/fa6";
import { FaReact, FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

export const objectLanguage = {
  ReactJs: <FaReact size={30} color="#61DBFB" />,
  BootStrap: <FaBootstrap size={30} color="#7952B3" />,
  Css: <FaCss3 size={30} color="#264DE4" />,
  html5: <FaHtml5 size={30} color="#E34C26" />,
  Vite: (
    <svg
      className="w-[30px]"
      xmlns="http://www.w3.org/2000/svg"
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
          <stop offset="0" stop-color="#41d1ff" />
          <stop offset="1" stop-color="#bd34fe" />
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
          <stop offset="0" stop-color="#ffea83" />
          <stop offset=".083" stop-color="#ffdd35" />
          <stop offset="1" stop-color="#ffa800" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"
      />
      <path
        fill="url(#b)"
        d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"
      />
    </svg>
  ),
  JavaScript: <IoLogoJavascript size={30} color="#F0DB4F" />,
  TailwindCss: <RiTailwindCssFill size={30} color="#38BDF8" />,
  MaterialUi: (
    <svg
      className="w-[30px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <path fill="#1FA6CA" d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z" />
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
  NextJS: <SiNextdotjs size={30} />,
};
