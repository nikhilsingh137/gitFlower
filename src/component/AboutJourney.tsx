import React, { useEffect } from "react";
import Style from "./aboutJourney.module.scss";
import { fetchAboutJourney } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CountUp from "react-countup";

const AboutJourney = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchAboutJourney());
  }, [dispatch]);
  return (
    <div className={Style.AboutJourney}>
      <div className={Style.wrapper}>
        {data.aboutJourneyData &&
          data.aboutJourneyData.map((item) => {
            return (
              <>
                <div className={Style.content}>
                  <div className={Style.text}>
                    <h2>{item.title}</h2>
                    <h3>{item.slug}</h3>
                    <p>{item.paragraph}</p>
                    <p>{item.text}</p>
                  </div>
                  <div className={Style.image}>
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className={Style.rating}>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <div className={Style.number}>
                          <h2>
                            <CountUp
                              start={0}
                              end={parseInt(item.title, 10)}
                              duration={4}
                              delay={2}
                            />
                            k+
                          </h2>
                          <h3>{item.slug}</h3>
                        </div>
                      );
                    })}
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AboutJourney;
