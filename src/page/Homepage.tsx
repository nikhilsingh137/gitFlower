import React from "react";
import Imagebox from "../component/Imagebox";
import OnlineData from "../component/OnlineData";
import Image from "../component/Image";
import ItemBox from "../component/ItemBox";
import SpecialData from "../component/SpecialData";
import Customer from "../component/Customer";
import AboutJourney from "../component/AboutJourney";

const Homepage = () => {
  return (
    <>
      <Imagebox />
      <OnlineData />
      <Image />
      <ItemBox />
      <SpecialData />
      <ItemBox />
      <AboutJourney />
      <Customer />
      <SpecialData />
    </>
  );
};

export default Homepage;
