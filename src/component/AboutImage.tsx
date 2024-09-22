import React, { useEffect } from "react";
import Style from "./aboutImage.module.scss";
import { fetchAboutImage } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const AboutImage = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchAboutImage());
  }, [dispatch]);
  return (
    <div className={Style.AboutImage}>
      {data.aboutImageData &&
        data.aboutImageData.map((item) => {
          return (
            <div className={Style.content}>
              <span>
                <img src={item.img} alt="" />
              </span>
              <div className={Style.text}>
                <div className={Style.wrapper}>
                  <h2>{item.title}</h2>
                  <h3>{item.paragraph}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AboutImage;
