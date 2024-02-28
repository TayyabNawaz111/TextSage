import React from "react";
import NavBar from "./components/NavBar";
import Brief from "./components/Brief";
import Info from "./components/Info";
import Card from "./components/Card";
import Aims from "./components/Aims";
function App() {
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
          content="TRACK THE CUSTOMERS"
          opacity="500"
        />
        <Card
          bg="blue"
          header="INTEGRATION"
          content="TRANSPARENT PRICING"
          opacity="500"
        />
      </div>
      <Aims />
    </>
  );
}

export default App;
