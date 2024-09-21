import React, { useEffect } from "react";
import Style from "./imagebox.module.scss";
import ImgImage from "../img/flowershop.jpg";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchImageContent } from "../redux/Slice";

const Imagebox = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchImageContent());
  }, [dispatch]);
  return (
    <div className={Style.imagebox}>
      <div className={Style.image}>
        <img src={ImgImage} alt="" />
      </div>
      <div className={Style.content}>
        <div className={Style.text}>
          {data.imageData &&
            data.imageData.map((item) => {
              return (
                <>
                  <h2>{item.title}</h2>
                  <h3>{item.heading}</h3>
                  <p>{item.paragraph}</p>
                  <div className={Style.button}>
                    <a href={item.url}>{item.button}</a>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Imagebox;
