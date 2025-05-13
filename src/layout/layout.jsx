import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { FaEnvelopeOpen, FaSuitcase } from "react-icons/fa";
import { BsPersonVcard } from "react-icons/bs";
import "./layout.css";
import InTouch from "./getInTouch";
import MyProjects from "./MyProjects";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CreateTaps } from "../Components/CreateTaps";

function Layout() {
  const [active, setActive] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname == "/") {
      setActive(null);
    } else if (pathname == "/about") {
      setActive(0);
    } else if (pathname == "/portfolio") {
      setActive(1);
    } else if (pathname == "/intouch") {
      setActive(2);
    }
  }, [pathname]);

  const tapsModel = [
    {
      id: 0,
      title: " ABOUT - ME ",
      content: "test 1 ",
      animationStyle: "origin-top-right",
      icon: <BsPersonVcard size={30} />,
      link: "/about",
    },
    {
      id: 1,
      title: " MY - PORTFOLIO ",
      content: <MyProjects />,
      animationStyle: " origin-bottom-left",
      icon: <FaSuitcase size={30} />,
      link: "/portfolio",
    },
    {
      id: 2,
      title: " GET - INTOUCH ",
      content: <InTouch />,
      animationStyle: "origin-bottom-right ",
      icon: <FaEnvelopeOpen size={30} />,
      link: "/intouch",
    },
  ];

  return (
    <>
      <div className="grid  grid-cols-3 gap-3 items-stretch h-screen p-4 ">
        <div className="hidden  xl:block photo"></div>
        <div className="col-span-3 xl:col-span-2 grid sm:grid-cols-1 md:grid-cols-2  gap-3 relative ">
          <div
            className={`${
              active == null ? "" : "hidden-tab"
            } flex justify-center items-center flex-col text-white`}
          >
            <span className="font-bold text-2xl ">Hi There ! I'm </span>
            <p className="font-bold text-3xl md:text-4xl">
              Ahmed Mohamed Shalaby
            </p>
            <span className="text-[var(--color-word)] mt-2 text-[18px] relative truncate myJob">
              Front end Developer( React Js && Next JS )
            </span>
          </div>
          {tapsModel.map((tap, index) => (
            <CreateTaps
              key={tap.id}
              tap={tap}
              index={index}
              func={setActive}
              active={active}
            />
          ))}
          <div
            className={`absolute w-full h-full overflow-y-scroll bg-[var(--secandaryColor)] transition-all duration-500 linear
    ${active !== null ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
          >
            <Link to={"/"}>
              <MdClose
                color="var(--color-word)"
                onClick={() => setActive(null)}
                className=" sticky top-[8%] left-[90%]  cursor-pointer text-2xl md:text-4xl z-4"
              />
            </Link>
            <div className="text-2xl md:text-4xl text-center m-4 p-3 font-bold cursor-default">
              <span className="text-[var(--color-text)]">
                {tapsModel[active]?.title.split("-")[0]} &nbsp;
              </span>
              <span className="text-[var(--color-word)] ">
                {tapsModel[active]?.title.split("-")[1]}
              </span>
              <div className="icon flex justify-center items-center m-3 p-3 text-[var(--color-word)] realtive ">
                <hr className="w-100" />
                <span className="mx-4">{tapsModel[active]?.icon}</span>
                <hr className="w-100" />
              </div>
            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
