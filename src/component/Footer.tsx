import React, { useEffect } from "react";
import Style from "./footer.module.scss";
import { fetchFooter } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Footer = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchFooter());
  }, [dispatch]);
  return (
    <div className={Style.Footer}>
      <div className={Style.wrapper}>
        {data.footerData &&
          data.footerData.map((item) => {
            return (
              <div
                className={`${Style.content} ${
                  item.id === "1" ? Style.first : ""
                }`}
              >
                <h2>{item.title}</h2>
                <p>{item.paragraph}</p>
                <div className={Style.nav}>
                  {item.nav &&
                    item.nav.map((item) => {
                      return <a href={item.url}>{item.title}</a>;
                    })}
                </div>
                <h3>{item.address}</h3>
                <h4>{item.email}</h4>
                <h5>{item.number}</h5>
              </div>
            );
          })}
      </div>
      <div className={Style.line}>
        <div className={Style.bottom}>
          <h2>Copyright © 2024 Flower Shop</h2>
          <div className={Style.icon}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
