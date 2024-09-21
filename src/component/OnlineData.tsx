import React, { useEffect } from "react";
import Style from "./onlineData.module.scss";
import { fetchOnline } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const OnlineData = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchOnline());
  }, [dispatch]);
  return (
    <div className={Style.OnlineData}>
      <div className={Style.wrapper}>
        {data.onlineData &&
          data.onlineData.map((item) => {
            return (
              <div className={Style.content}>
                <h2>{item.number}</h2>
                <h3>{item.title}</h3>
                <p>{item.paragraph}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OnlineData;
