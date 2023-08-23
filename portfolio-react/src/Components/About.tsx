import React from "react";

function About() {
  return (
    <div
      data-name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Dedicated and efficient full stack developer with 4+ year’s experience
          in C#, Microsoft Bot Framework, .NET Core Web Applications and .NET
          Developer. Skilled in designing ,publishing new applications
          ,debugging & modifying the existing ones. Adept at writing codes in C#
          for .NET Core applications, reviewing test protocols for application
          testing. Good at spearheading a team and liaising with the clients to
          understand their requirements & fulfilling the same with 100% quality
          assurance.
        </p>
      </div>
    </div>
  );
}

export default About;
