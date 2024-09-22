import React, { useEffect } from "react";
import Style from "./aboutFlorist.module.scss";
import { fetchAboutFlorist } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const AboutFlorist = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchAboutFlorist());
  }, [dispatch]);
  return (
    <div className={Style.AboutFlorist}>
      <div className={Style.wrapper}>
        {data.aboutFloristData &&
          data.aboutFloristData.map((item) => {
            return (
              <>
                <div className={Style.image}>
                  {item.image &&
                    item.image.map((item) => {
                      return (
                        <span
                          className={`${item.id === "1" ? Style.first : ""}`}
                        >
                          <img src={item.img} alt="" />
                        </span>
                      );
                    })}
                </div>
                <div className={Style.content}>
                  <h2>{item.title}</h2>
                  <h3>{item.heading}</h3>
                  <p>{item.paragraph}</p>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default AboutFlorist;
