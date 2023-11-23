import React from "react";
import { Parallax } from "react-parallax";
import Img from "../assets/b1.jpg";

export default function ImageOne() {

  return (
    <>
      <Parallax className="min-h-screen relative" blur={1} bgImage={Img} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className="flex items-center justify-center absolute h-screen w-full ">
          <span className="bg-gray-500 uppercase text-white p-4 text-xl tracking-normal">
            {" "}
            Leaf
          </span>
        </div>
      </Parallax>
    </>
  );
}
