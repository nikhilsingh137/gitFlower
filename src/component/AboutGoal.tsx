import React, { useEffect } from "react";
import Style from "./aboutGoal.module.scss";
import { fetchAboutGoal } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const AboutGoal = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchAboutGoal());
  }, [dispatch]);
  return (
    <div className={Style.AboutGoal}>
      <div className={Style.wrapper}>
        {data.aboutGoalData &&
          data.aboutGoalData.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.image}>
                  <img src={item.img} alt="" />
                </div>
                <div className={Style.mainbox}>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <div className={Style.paragraph}>
                          <h2>{item.title}</h2>
                          <p>{item.paragraph}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AboutGoal;
