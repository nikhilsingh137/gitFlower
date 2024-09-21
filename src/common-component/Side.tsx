import React, { useEffect, useState } from "react";
import Style from "./resSide.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeader } from "../redux/Slice";

const Side = () => {
  const [active, setActive] = useState("1");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchHeader());
  }, [dispatch]);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const activeItem = data.headerData.find((item) => item.url === currentUrl);
    if (activeItem) {
      setActive(activeItem.id);
    }
  }, [data.headerData]);

  const handleActive = (id: any) => {
    setActive(id);
  };
  return (
    <div className={Style.Side}>
      {data.headerData &&
        data.headerData.map((item) => {
          return (
            <a
              href={item.url}
              key={item.id}
              onClick={() => handleActive(item.id)}
              className={`${active === item.id ? Style.active : ""}`}
            >
              {item.title}
            </a>
          );
        })}
    </div>
  );
};

export default Side;
