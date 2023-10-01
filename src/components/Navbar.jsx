import React from "react";
import { useState } from "react";
import "../index.css";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex justify-between bg-black h-16">
      <div className="flex">
        <section className="flex">
          <div
            className="pt-6 pl-4 space-y-1"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-6 animate-pulse bg-white"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8 text-white cursor-pointer"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >X</div>
          </div>
        </section>

        <p className="text-slate-300 text-xl p-4">Summarize AI</p>
      </div>
      <button>Github</button>
    </div>
  );
}

export default Navbar;
