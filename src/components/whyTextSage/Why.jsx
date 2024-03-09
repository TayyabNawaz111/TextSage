import React from "react";
import NavBar from "../frontPage/fpComponents/NavBar";
import Intro from "./Intro";
import WhyPageFooter from "./WhyPageFooter";
function Why() {
  return (
    <>
      <NavBar
        bgColor="white"
        textColor="gray-400"
        activeColor="black"
        LBcolor="black"
        GSbg="black"
        GStext="white"
      />
      <Intro />
      <WhyPageFooter />
    </>
  );
}

export default Why;
