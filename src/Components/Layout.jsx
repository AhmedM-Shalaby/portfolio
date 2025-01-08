import React from "react";

export default function Layout() {
  return (
    <div className="container mx-auto my-8">
      <div className="grid  grid-rows-12 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
        <div className="lg:row-span-full lg:block hidden bg-white ">
          <img
            src="https://images.pexels.com/photos/28638641/pexels-photo-28638641/free-photo-of-dramatic-view-of-manhattan-bridge-from-brooklyn-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="row-span-6 bg-transparent text-white text-2xl text-center flex-center font-bold ">
          <div className="truncate">
            <span>Hi There ! I'm </span>
            <p>Ahmed Shalaby</p>
            <span className="dynamic-text">Front End developer</span>
          </div>
        </div>
        <div className="Boxs row-span-6">
          <div className="Box">
            <span data-hover = " About"> About </span>
            <span data-hover = " ME"> ME </span>
          </div>
        </div>
        <div className="Boxs row-span-6">
          <div className="Box">
            <span data-hover = " MY"> My </span>
            <span data-hover = " Portfolio"> Portfolio </span>
          </div>
        </div>
        <div className="Boxs row-span-6">
          <div className="Box">
            <span data-hover = " GET"> GET </span>
            <span data-hover = " IN TOUCH">IN TOUCH </span>
          </div>
        </div>
      </div>
    </div>
  );
}
