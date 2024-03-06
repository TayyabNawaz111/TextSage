import React from "react";
import JoshBaker from "./images/JoshBaker.png";
function Footer() {
  return (
    <>
      <div className="flex">
        <div className="w-2/4 bg-gray-700 pb-10 pt-20 ">
          <div className="pl-10 text-gray-300 font-bold text-6xl">❝</div>
          <div className="text-white pl-10 leading-7 pt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Sed
            modi fuga tenetur odio tempora suscipit, sapiente <br /> iure
            impedit velit iusto quae quas repellat sequi. Lorem ipsum <br />
            dolor sit amet consectetur adipisicing elit. Dolores, perspiciatis!
          </div>
          <div className="pl-10 pt-16 text-white font-bold text-xl">
            JOSH BAKER
          </div>
          <div className="text-white pl-10 leading-7 pt-4">
            CEO OF BAKER REALITY
          </div>
        </div>
        <div>
          <img
            src={JoshBaker}
            alt="Josh Baker"
            className="object-cover"
            style={{ width: "950px", height: "478px" }}
          />
        </div>
      </div>
      <div className="flex justify-end ">
        <span className="bg-gray-400 text-3xl font-semibold mr-40 p-4 ">
          &#8592; &#8594;
        </span>
      </div>
      <div
        className="flex justify-center font-semibold text-9xl"
        style={{ lineHeight: "0" }}
      >
        <p className="mx-4">.</p>
        <p className="mx-4">.</p>
        <p className="mx-4">.</p>
        <p className="mx-4">.</p>
      </div>
      <div className="bg-gray-100 mt-32 flex">
        <div
          className="pl-6 mt-16 text-blue-900 ml-12 font-bold text-5xl"
          style={{ lineHeight: "1.25" }}
        >
          JOIN Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <div className="flex mb-24">
            <div
              className="bg-gray-900 text-white py-2 pl-5 mt-12 text-sm"
              style={{ width: "139px" }}
            >
              <button>GET TEXTSAGE</button>
            </div>
            <div
              className="text-black border border-black ml-2 py-2 pl-5 mt-12 text-sm"
              style={{ width: "139px" }}
            >
              <button>SEE PRICING</button>
            </div>
          </div>
        </div>
        <div className="bg-white ml-96 px-40 mt-20 mb-20 border mr-6 border-blue-900 rounded-lg ">
          <button className="border rounded bg-blue-900 text-white w-10 mt-10">
            ALL
          </button>
          <button className="ml-2 border-2 rounded bg-slate-300">
            MORNING
          </button>
          <button className="ml-2  border-2 rounded bg-slate-300">
            AFTERNOON
          </button>
          <button className="ml-2 border-2 rounded bg-slate-300">
            EVENING
          </button>
          <div
            className="pl-24 inline-flex text-white  mt-10 bg-gray-900"
            style={{ width: "130px" }}
          >
            2.81
          </div>
          <br />
          <div
            className="pl-48 inline-flex text-white mt-10 bg-blue-900"
            style={{ width: "250px" }}
          >
            3.58
          </div>
          <br />
          <div
            className="pl-80 inline-flex text-white mt-10 bg-slate-400"
            style={{ width: "360px" }}
          >
            4.38
          </div>
          <span>
            <button className="bg-gray-900 px-1 text-gray-900 mt-8">M</button>
            MORNING
          </span>
          <span className="ml-2">
            <button className="bg-blue-900 px-1 text-blue-900 mt-2">A</button>
            AFTERNOON
          </span>
          <span className="ml-2">
            <button className="bg-slate-400 px-1 text-slate-400 mt-2">E</button>
            EVENING
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
