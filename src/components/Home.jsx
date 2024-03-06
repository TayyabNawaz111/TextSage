import React from "react";
import NavBar from "./frontPage/fpComponents/NavBar";
import Brief from "./frontPage/fpComponents/Brief";
import Aims from "./frontPage/fpComponents/Aims";
import Card from "./frontPage/fpComponents/Card";
import Footer from "./frontPage/fpComponents/Footer";
import Info from "./frontPage/fpComponents/Info";
import Integration from "./frontPage/fpComponents/Integration";
import Pricing from "./frontPage/fpComponents/Pricing";
import Rating from "./frontPage/fpComponents/Rating";

function Home() {
  return (
    <>
      <NavBar />
      <Brief />
      <Info />
      <div className="flex">
        <Card
          bg="gray"
          header="SMS FOR CAMPAIGNS"
          content="HASSLE FREE SMS CAMPAIGNS"
          opacity="700"
        />
        <Card
          bg="purple"
          header="Simplify"
          content="ANALYTICS AT YOUR HANDS"
          opacity="500"
        />
        <Card
          bg="gray"
          header="Collaboration for all"
          content={
            <>
              TRACK THE <br /> CUSTOMERS
            </>
          }
          opacity="500"
        />
        <Card
          bg="blue"
          header="INTEGRATION"
          content={
            <>
              TRANSPARENT <br /> PRICING
            </>
          }
          opacity="500"
        />
      </div>
      <Aims />
      <Rating />
      <Integration />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
