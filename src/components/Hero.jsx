import React from "react";
import Input from "./Input";
import Display from "./Display";

function Hero() {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="bg-[#222327] h-[90vh] rounded-3xl mx-8 sm:mx-16 md:mx-16 lg:mx-16">
        <Display />
        <Input />
      </div>
    </div>
  );
}

export default Hero;
