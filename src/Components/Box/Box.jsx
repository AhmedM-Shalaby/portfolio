import React from "react";

export default function Box({ content }) {
  return (
    <div className="flex justify-center items-center">
      <div className=" secandaryColor text-colorText ">{content}</div>
    </div>
  );
}
