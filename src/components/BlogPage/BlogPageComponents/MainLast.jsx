import React from "react";
import man from "./images/man.png";
import graph from "./images/graph.png";
import screen from "./images/screen.png";
function MainLast() {
  return (
    <div className="flex mt-24">
      <div
        className="w-1/3  text-blue-900 text-5xl font-extrabold"
        style={{ lineHeight: "1.2" }}
      >
        LOREM IPSUM <br /> DOLOR SIT
        <br />
        <img className="mt-4" src={man} alt="man with phone" />
      </div>
      <div className="w-1/3">
        <div className="text-blue-900 text-lg font-extrabold pt-4 ">
          LOREN IPSUM
        </div>
        <div
          className="mt-4 border-gray-400 border-b pb-4"
          style={{ lineHeight: "1.6" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcae <br />
          ca ti, laborum officia. Sed praesentium esse voluptates dolorum.
        </div>
        <br />
        <div className="text-blue-900 text-lg font-extrabold pt-4 ">
          LOREN IPSUM
        </div>
        <div
          className="mt-4 border-gray-400 border-b pb-4"
          style={{ lineHeight: "1.6" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcae <br />
          ca ti, laborum officia. Sed praesentium esse voluptates dolorum.
        </div>
        <br />
        <div className="text-blue-900 text-lg font-extrabold pt-4 ">
          LOREN IPSUM
        </div>
        <div
          className="mt-4 border-gray-400 border-b pb-4"
          style={{ lineHeight: "1.6" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcae <br />
          ca ti, laborum officia. Sed praesentium esse voluptates dolorum.
        </div>
        <br />
        <div className="text-blue-900 text-lg font-extrabold pt-4 ">
          LOREN IPSUM
        </div>
        <div
          className="mt-4 border-gray-400 border-b pb-4"
          style={{ lineHeight: "1.6" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcae <br />
          ca ti, laborum officia. Sed praesentium esse voluptates dolorum.
        </div>
        <br />
        <div className="text-blue-900 text-lg font-extrabold pt-4 ">
          LOREN IPSUM
        </div>
        <div
          className="mt-4 border-gray-400 border-b pb-4"
          style={{ lineHeight: "1.6" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcae <br />
          ca ti, laborum officia. Sed praesentium esse voluptates dolorum.
        </div>
        <br />
        <div className="text-blue-900 text-lg font-extrabold pt-4 ">
          LOREN IPSUM
        </div>
        <div
          className="mt-4 border-gray-400 border-b pb-4"
          style={{ lineHeight: "1.6" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcae <br />
          ca ti, laborum officia. Sed praesentium esse voluptates dolorum.
        </div>
        <br />
      </div>
      <div className="w-1/3 ml-12">
        <div
          className="text-blue-900 text-3xl font-extrabold pt-4"
          style={{ lineHeight: "1.3" }}
        >
          LOREM IPSUM <br /> DOLOR SIT
        </div>
        <div>
          <img src={screen} alt="screen" className="mt-6" />
        </div>
        <div className="text-blue-900 text-base font-extrabold pt-8 ">
          LOREN IPSUM
        </div>
        <div className="mt-4" style={{ lineHeight: "1.6" }}>
          Lorem ipsum dolor sit amet consec <br /> tetur adipisicing elit. Obcae
          ca ti, lab <br /> orum officia. Sed praesentium esse <br /> voluptates
          dolorum.
        </div>
        <div className="pt-6">
          <img src={graph} alt="graph" />
        </div>
        <div className="text-blue-900 text-base font-extrabold pt-4">
          LOREN IPSUM
        </div>
        <div className="mt-4" style={{ lineHeight: "1.6" }}>
          Lorem ipsum dolor sit amet consec <br /> tetur adipisicing elit. Obcae
          ca ti, lab <br /> orum officia. Sed praesentium esse <br /> voluptates
          dolorum.
        </div>
      </div>
    </div>
  );
}

export default MainLast;
