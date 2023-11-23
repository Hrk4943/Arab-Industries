import React from "react";
import { Parallax } from "react-parallax";
import Img from "../assets/b2.jpg";

export default function ImageTwo() {
  return (
    <>
      <Parallax className="min-h-screen relative" bgImage={Img} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className="flex items-center justify-center absolute h-screen  w-full ">
          <span className="  bg-gray-700 uppercase text-white p-4 text-xl tracking-normal">
            {" "}
            Ice Bergs
          </span>
        </div>
      </Parallax>
    </>
  );
}
