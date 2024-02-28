import React from "react";
import np1 from "./images/np1.png";
import np2 from "./images/np2.png";
import picture from "./images/picture.png";
function Rating() {
  return (
    <>
      <div className="flex">
        <div className="w-2/3 bg-gray-700 pb-36 pt-24 ">
          <div className="text-3xl pl-20 text-white font-extrabold">
            NO MORE SPAM LIKE <br /> TEXT MESSAGES
          </div>
          <div className="text-white mt-10 text-2xl pl-20">
            SMS marketing automation, just like email, need not be <br />{" "}
            limited to any particular country. Omnisend supports all <br />{" "}
            country codes for SMS (text-only messages) sending so <br /> that
            you can reach your international customers and drive <br />{" "}
            conversions from anywhere in the world.
          </div>
          <div className="text-white mt-20 pl-20 flex">
            <div>
              <img
                src={np1}
                alt="99% OPEN RATES"
                className="rounded-full w-16 h-16"
              />
            </div>
            <div>
              <div className="text-2xl font-extrabold ml-6">99%</div>
              <div className="ml-6 mt-2 text-lg">OPEN RATES</div>
            </div>
          </div>
          <div className="text-white mt-12 pl-20 flex">
            <div>
              <img
                src={np2}
                alt="50X+ OPEN RATES"
                className="rounded-full h-16 w-16"
              />
            </div>
            <div>
              <div className="text-2xl font-extrabold ml-6">50X+</div>
              <div className="ml-6 mt-2 text-lg">OPEN RATES</div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={picture}
            alt="a picture"
            className=" h-full object-cover aspect-auto"
            style={{ width: "566px" }}
          />
        </div>
      </div>
    </>
  );
}

export default Rating;
