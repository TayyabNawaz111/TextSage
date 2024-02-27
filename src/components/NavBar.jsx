import React from "react";

function NavBar() {
  return (
    <header>
      <nav className="flex items-center justify-start py-5 px-24 bg-gray-600">
        <button className="cursor-pointer text-xl">textsage</button>
        <button className="ml-8 text-xl text-white">Why textsage</button>
        <button className="ml-8 text-xl text-white">Features</button>
        <button className="ml-8 text-xl text-white">Pricing</button>
        <button className="ml-8 text-xl text-white">Blog</button>
        <button className="ml-auto text-xl text-white">Login</button>
        <button className="ml-4 text-xl bg-white px-4 py-2 rounded">
          Get started
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
