import React from "react";
function PriceCard({ heading }) {
  return (
    <>
      <div className="w-1/4 bg-white border-2 border-blue-900 rounded shadow">
        <div className="text-blue-900 pt-10 pl-6 font-bold text-xl ">
          {heading}
        </div>
        <div className="mt-4 pl-6 font-semibold ">
          SEND THE RIGHT CONTENT AT THE <br /> RIGHT TIME WITH TESTING AND
          <br />
          SCHEDULING FEATURES.
        </div>
        <div className="mt-12 pl-6 ">
          <b className="text-xl"> $25/ </b> MONTH
        </div>
        <div className="pl-6 mt-6 text-blue-900 font-bold text-xl">
          INCLUDES
        </div>
        <div className="pl-6 text-sm mt-4">
          &#10004; COMBINE AUTOMATED TEXTS WITH EMAIL
        </div>
        <div className="pl-6 text-sm mt-4">
          &#10004; COMBINE AUTOMATED TEXTS WITH EMAIL
        </div>
        <div className="pl-6 text-sm mt-4">
          &#10004; COMBINE AUTOMATED TEXTS WITH EMAIL
        </div>
        <div className="pl-6 text-sm mt-4">
          &#10004; COMBINE AUTOMATED TEXTS WITH EMAIL
        </div>
        <div className="flex item-center justify-center my-10">
          <button className="py-2 px-24 text-sm text-black border-2 font-semibold p-4 border-black">
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
}

export default PriceCard;
