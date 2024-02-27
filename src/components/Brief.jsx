import React from "react";
function Brief() {
  return (
    <>
      <div className="bg-gray-700 relative">
        <p className="text-center text-white text-xl pt-24 font-semibold">
          THE SMS MESSAGING PLATFORM
        </p>
        <p className="text-center text-white text-6xl pt-5 font-bold relative pb-8">
          REVOLUTIONIZE YOUR MARKETING <br /> WITH LIGHTNING-FAST TEXT <br />
          MESSAGE CAMPAIGNS
          <input
            type="text"
            className="absolute text-white pb-7 pt-3 mb-5 pl-16 top-32 h-16 left-80 bg-transparent border border-white placeholder-white text-lg  z-1"
            style={{ width: "900px" }}
            placeholder="Write a text message for me to advise patients to book their appointments for this month"
          />
        </p>
        <div className="flex items-center justify-center pb-24  ">
          <button className=" bg-white text-black py-4 px-10 font-bold">
            {" "}
            GET TEXTSAGE
          </button>
          <button className="ml-10 border-2 border-white py-3 px-10 text-white font-bold">
            REQUEST DEMO
          </button>
        </div>
      </div>
    </>
  );
}

export default Brief;
