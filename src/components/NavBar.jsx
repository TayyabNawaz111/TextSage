import React from "react";

function NavBar() {
  return (
    <>
      <nav>
        <div className="flex items-center justify-start pt-5 pl-24 pb-5 bg-gray-600">
          <button className="cursor-pointer text-xl">textsage</button>
          <button className="pl-24 cursor-pointer text-xl text-white">
            Why textsage
          </button>
          <button className="pl-24 cursor-pointer text-xl text-white">
            Features
          </button>
          <button className="pl-24 cursor-pointer text-xl text-white">
            Pricing
          </button>
          <button className="pl-24 cursor-pointer text-xl text-white">
            Blog
          </button>
          <button className="cursor-pointer pl-96 text-xl text-white">
            Login
          </button>
          <button className="cursor-pointer ml-12 text-xl bg-white p-2">
            Get started
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
