import React, { useEffect } from "react";
import Style from "./image.module.scss";
import { fetchImage } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Image = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);
  return (
    <div className={Style.Image}>
      <div className={Style.wrapper}>
        {data.imagecontent &&
          data.imagecontent.map((item) => {
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
                  <div className={Style.button}>
                    <a href={item.url}>{item.button}</a>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Image;
