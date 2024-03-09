import React from "react";

function WhyPageFooter() {
  return (
    <div className="mt-24 pb-24 flex bg-gray-50">
      <div className="w-1/2 pl-12">
        <p className="text-5xl mt-16 font-bold " style={{ lineHeight: "1.3" }}>
          LOREM IPSUM <br /> DOLOR SIT
        </p>
        <br />
        <p className="font-medium text-lg" style={{ lineHeight: "1.7" }}>
          Lorem ipsum dolor sit amet, consectetur
          <br /> consectetur adipisicing elit. Quaerat tomorrow <br /> autem
          labore sequi cupiditate doloremque <br />
          similique voluptates itaque nobis repellat.
        </p>
      </div>
      <div className="w-1/2">
        <p className="mt-16 text-green-500 text-5xl inline-block">&#8593;</p>
        <p className="ml-4 text-5xl font-extrabold text-blue-900 inline-block">
          73%
        </p>
        <p className="ml-10 text-lg font-medium mt-8 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit.
          Deserunt, exercitationem! Voluptatum repudian
        </p>
        <p className="mt-4 text-green-500 text-5xl inline-block">&#8593;</p>
        <p className="ml-4 text-5xl font-extrabold text-blue-900 inline-block">
          73%
        </p>
        <p className="ml-10 text-lg font-medium mt-8 leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit.
          Deserunt, exercitationem! Voluptatum repudian
        </p>
      </div>
    </div>
  );
}

export default WhyPageFooter;
