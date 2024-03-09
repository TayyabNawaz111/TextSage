import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ textColor, activeColor, bgColor, LBcolor, GSbg, GStext }) {
  return (
    <header>
      <nav
        className={`flex items-center justify-start py-5 px-24 ${
          bgColor ? `bg-${bgColor}` : "bg-gray-700"
        }`}
      >
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive
              ? `text-xl text-${activeColor}`
              : `text-xl text-${textColor}`
          }
        >
          textsage
        </NavLink>
        <NavLink
          to="/WhyTextSage"
          className={(navData) =>
            navData.isActive
              ? `ml-20 text-xl text-${activeColor}`
              : `ml-20 text-xl text-${textColor}`
          }
        >
          Why textsage
        </NavLink>
        <NavLink
          to="/Features"
          className={(navData) =>
            navData.isActive
              ? `ml-20 text-xl text-${activeColor}`
              : `ml-20 text-xl text-${textColor}`
          }
        >
          Features
        </NavLink>
        <NavLink
          to="/Pricing"
          className={(navData) =>
            navData.isActive
              ? `ml-20 text-xl text-${activeColor}`
              : `ml-20 text-xl text-${textColor}`
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/Blog"
          className={(navData) =>
            navData.isActive
              ? `ml-20 text-xl text-${activeColor}`
              : `ml-20 text-xl text-${textColor}`
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/Login"
          className={(navData) =>
            navData.isActive
              ? `ml-auto text-xl text-${activeColor}`
              : `ml-auto text-xl text-${LBcolor}`
          }
        >
          Login
        </NavLink>
        <button
          className={`ml-20 text-xl text-${GStext} bg-${GSbg} px-4 py-2 rounded`}
        >
          Get started
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
