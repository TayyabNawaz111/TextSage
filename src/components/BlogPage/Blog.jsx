import React from "react";
import NavBar from "../frontPage/fpComponents/NavBar";
import RequestDemo from "./BlogPageComponents/RequestDemo";
import MainLast from "./BlogPageComponents/MainLast";
function Blog() {
  return (
    <div>
      <div className="border-b">
        <NavBar
          bgColor="white"
          textColor="gray-400"
          activeColor="black"
          LBcolor="black"
          GSbg="black"
          GStext="white"
        />
      </div>
      <RequestDemo />
      <MainLast />
    </div>
  );
}

export default Blog;
