import React from "react";
import Box from "../Box/Box";

export default function Layout() {
  const content = ["ABOUT - ME", "MY - PORTFOLIO", "GET - INTOUCH"];
  return (
    <div className=" truncate  p-8" style={{ maxHeight: "calc(100vh - 2rem)" }}>
      <div className="grid grid-cols-12 gap-8 h-full">
        <div className=" col-span-4 ">
          <img
            className="size-full"
            src="https://moscow-react.vercel.app/images/woman.jpg"
            alt=""
          />
        </div>
        <div className=" col-span-8 grid grid-rows-2 gap-8 grid-cols-2 ">
          <div className="flex justify-center items-center bg-mainColor">
            <div className="text-center text-colorText">
              <p className="text-Paragraf">Hi There ! I'm </p>
              <p className="text-Heading font-bold"> AHMED MOHAMED SHALABY</p>
              <span className="text-Paragraf text-colorWord font-bold">
                FRONT END
              </span>
            </div>
          </div>
          {content.map((ele) => {
            return <Box content={ele} />;
          })}
        </div>
      </div>
    </div>
  );
}
