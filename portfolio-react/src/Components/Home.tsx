import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div
      data-name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Full Stack and AI Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Dedicated and efficient full stack developer with 4+ year’s
            experience in Azure OepnAI, LLM, JS, python, LangChain,C#, Microsoft
            Bot Framework, .NET Core Web Applications and .NET. Skilled in
            designing ,publishing new applications ,debugging & modifying the
            existing ones. Adept at writing codes in C# for .NET Core
            applications, reviewing test protocols for application testing. Good
            at spearheading a team and liaising with the clients to understand
            their requirements & fulfilling the same with 100% quality
            assurance.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://media.licdn.com/dms/image/C5603AQESepycGFl63w/profile-displayphoto-shrink_800_800/0/1590255775792?e=1698278400&v=beta&t=xR9WEslyHjaA9PzBw7p2zQLSDtUFU0U-yYAtzWQoUws"
            alt="myImage"
            className="rounded-2xl mx-auto w-2/3 md:w-full hover:scale-110 transition duration-500"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
