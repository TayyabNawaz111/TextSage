import React from "react";
import NavBar from "../frontPage/fpComponents/NavBar";
import Intro from "./WhyPageComponents/Intro";
import WhyPageFooter from "./WhyPageComponents/WhyPageFooter";
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
