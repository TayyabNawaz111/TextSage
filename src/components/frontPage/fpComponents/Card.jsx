import React from "react";

function Card({ bg, header, content, opacity }) {
  return (
    <div className={`w-1/4 mt-10 bg-${bg}-${opacity}`}>
      <p className="pl-6 text-white pt-6 font-bold">{header}</p>
      <p className="pl-6 text-3xl font-extrabold text-white mt-10 pb-24">
        {content}
      </p>
      <p className="pl-4 pt-20 pb-24 text-white">
        Combine automated texts with email and push notifications into a single
        automated platform
      </p>
      <button className="ml-20 mb-10 border-2 border-white py-3 px-10 text-white font-bold">
        SEE PRICING
      </button>
    </div>
  );
}

export default Card;
