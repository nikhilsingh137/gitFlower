import React from "react";
import AboutImage from "../component/AboutImage";
import AboutFlorist from "../component/AboutFlorist";
import SpecialData from "../component/SpecialData";
import AboutGoal from "../component/AboutGoal";
import AboutJourney from "../component/AboutJourney";
import AboutTeam from "../component/AboutTeam";

const AboutPage = () => {
  return (
    <>
      <AboutImage />
      <AboutFlorist />
      <AboutJourney />
      <AboutGoal />
      <AboutTeam />
      <SpecialData />
    </>
  );
};

export default AboutPage;
