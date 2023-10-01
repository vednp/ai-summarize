import React from "react";
import Input from "./Input";
import Display from "./Display";

function Hero() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="bg-[#222327] h-[90vh] mx-16 rounded-3xl ">
        <Display />
        <Input />
      </div>
    </div>
  );
}

export default Hero;
