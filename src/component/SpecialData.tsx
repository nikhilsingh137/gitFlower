import React, { useEffect } from "react";
import Style from "./specialdata.module.scss";
import { fetchSpecial } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const SpecialData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchSpecial());
  }, [dispatch]);
  return (
    <div className={Style.SpecialData}>
      <div className={Style.wrapper}>
        {data.specialData &&
          data.specialData.map((item) => {
            return (
              <div className={Style.content}>
                <span>
                  <img src={item.img} alt="" />
                </span>
                <div className={Style.text}>
                  <h2>{item.title}</h2>
                  <h3>{item.heading}</h3>
                  <div className={Style.button}>
                    <a href={item.url}>{item.button}</a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SpecialData;
