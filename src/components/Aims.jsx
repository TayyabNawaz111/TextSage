import React from "react";
function Aims() {
  return (
    <>
      <div className="bg-gray-50 pb-16">
        <div className="mb-10 flex justify-end ">
          <div>
            <span className="rounded-3xl px-2 py-1 text-white bg-gray-900">
              TS
            </span>
          </div>
          <div className="ml-2">
            <span className="border border-blue-200 px-6 py-6 rounded mr-6 shadow">
              Hi! How can I help you?
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <span className="border border-blue-200 px-3 py-3 rounded mr-6 shadow">
            I NEED HELP
          </span>
        </div>
        <div className="flex justify-end ">
          <span className="border border-blue-200 mt-6 px-3 py-3 rounded mr-6 shadow">
            HOW DO I SIGN UP
          </span>
          <div className="text-5xl font-extrabold absolute mr-80">
            FULL SUITE FOR SMS - & COMPAIGNS
          </div>
        </div>
        <div className="text-center text-purple-600 mt-10 text-2xl font-semibold">
          TextSage aims to provide a comprehensive messaging platform with
          advanced features, intelligent <br /> automation, and a user-friendly
          interface, enhancing user engagement and decision-making capabilities.
        </div>
        <div className="flex item-center justify-center mt-10">
          <button className="text-lg text-black border-4 font-bold p-4 border-black ">
            SWITCH TO TEXTSAGE
          </button>
        </div>
      </div>
    </>
  );
}

export default Aims;
