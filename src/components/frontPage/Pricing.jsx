import React from "react";
import PriceCard from "./PriceCard";
function Pricing() {
  return (
    <>
      <div className="bg-blue-900 relative pb-96">
        <div className="text-center font-bold text-2xl text-white py-10">
          SIMPLE PRICING THAT SUITS YOU THE BEST
        </div>
        <div className="flex justify-around absolute w-full">
          <PriceCard heading="STARTER" />
          <PriceCard heading="BUSINESS" />
          <PriceCard heading="PRO" />
        </div>
      </div>
      <div className="ml-16 mt-60 py-2 px-6 border rounded-3xl inline-block bg-slate-300 font-bold">
        <p>
          TEXTSAGE HAS HELPED OUR COMPANY OUT <br />
          TREMENDOUSLY
        </p>
      </div>
      <div
        className="inline-block ml-96 mt-6  py-2 px-6 border rounded-3xl bg-blue-900 text-white mb-6 font-bold"
        style={{ marginLeft: "950px" }}
      >
        <p>CUSTOMERS HAVE RESPONDED TO MESSAGES MORE THAN-EVER</p>
      </div>
    </>
  );
}

export default Pricing;
