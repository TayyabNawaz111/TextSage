import React from "react";
import calendlyy from "./images/calendlyy.png";
import zillow from "./images/zillow.png";
import zapier from "./images/zapier.png";
import openAI from "./images/openAI.png";
function Integration() {
  return (
    <>
      <div className="my-14">
        <div className="text-center text-purple-700 font-bold ">
          INTEGRATION
        </div>
        <div className="text-center font-extrabold mt-4 text-2xl">
          TEXTSAGE CONNECTS TO THE TOOLS YOU ALREADY USE
        </div>
        <div className="flex justify-center my-8">
          <div className="bg-transparent">
            <img src={calendlyy} alt="calendly logo" className="h-36 w-52" />
          </div>
          <div className="ml-4">
            <img src={zillow} alt="zillow logo" className="h-32 w-52" />
          </div>
          <div className="ml-4">
            <img src={zapier} alt="zapier logo" className="h-48 w-60 pb-10" />
          </div>
          <div className="pt-10">
            <img src={openAI} alt="openAI logo" className="h-12 w-52" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Integration;
