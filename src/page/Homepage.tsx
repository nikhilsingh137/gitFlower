import React from "react";
import Imagebox from "../component/Imagebox";
import OnlineData from "../component/OnlineData";
import Image from "../component/Image";
import ItemBox from "../component/ItemBox";
import SpecialData from "../component/SpecialData";

const Homepage = () => {
  return (
    <>
      <Imagebox />
      <OnlineData />
      <Image />
      <ItemBox />
      <SpecialData />
      <ItemBox />
      <SpecialData />
    </>
  );
};

export default Homepage;
