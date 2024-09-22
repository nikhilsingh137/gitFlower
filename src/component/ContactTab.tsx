import React, { useEffect, useState } from "react";
import Style from "./contactTab.module.scss";
import { fetchContactTab } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ContactTab = () => {
  const [active, setActive] = useState("1");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchContactTab());
  }, [dispatch]);

  const handleClick = (id: any) => {
    setActive((prev) => (prev ? id : id));
  };
  return (
    <div className={Style.ContactTab}>
      <div className={Style.wrapper}>
        {data.contactTab &&
          data.contactTab.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.left}>
                  <h2>{item.title}</h2>
                  <p>{item.paragraph}</p>
                </div>
                <div className={Style.mainbox}>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <div className={`${Style.detail}`}>
                          <h2
                            onClick={() => handleClick(item.id)}
                            className={` ${
                              active === item.id ? Style.active : ""
                            }`}
                          >
                            {item.title}
                          </h2>
                          <p
                            className={` ${
                              active === item.id ? Style.active : ""
                            }`}
                          >
                            {item.paragraph}
                          </p>
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

export default ContactTab;
