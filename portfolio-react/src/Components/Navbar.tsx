import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [navstate, setNavState] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Sangram</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNavState(!navstate)}
        className="cursor-pointer pr-4 z-10 text-gray-500"
      >
        {navstate ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navstate && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800
      text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-500 hover:scale-105 duration-200 hover:text-white"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;