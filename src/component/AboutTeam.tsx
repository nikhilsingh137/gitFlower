import React, { useEffect } from "react";
import Style from "./aboutTeam.module.scss";
import { fetchAboutTeam } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const AboutTeam = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchAboutTeam());
  }, [dispatch]);
  return (
    <div className={Style.AboutTeam}>
      <div className={Style.wrapper}>
        {data.aboutTeamData &&
          data.aboutTeamData.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.header}>
                  <h2>{item.title}</h2>
                  <h3>{item.slug}</h3>
                  <h4>{item.text}</h4>
                </div>
                <div className={Style.mainbox}>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <div className={Style.detail}>
                          <span>
                            <img src={item.img} alt="" />
                          </span>
                          <h2>{item.title}</h2>
                          <h3>{item.post}</h3>
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

export default AboutTeam;
