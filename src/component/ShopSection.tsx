import React, { useEffect } from "react";
import Style from "./shopsection.module.scss";
import { fetchShopSection } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";

const ShopSection = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchShopSection());
  }, [dispatch]);

  const filterData =
    data.shopsectionData &&
    data.shopsectionData.filter((item) => item.url === `/${userId}`);
  return (
    <div className={Style.ShopSection}>
      <div className={Style.wrapper}>
        {filterData &&
          filterData.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.header}>
                  <h2>{item.heading}</h2>
                </div>
                <div className={Style.paragraph}>
                  <h3>{item.paragraph}</h3>
                  <select>
                    <option>Default sorting</option>
                    <option>sort by popularity</option>
                    <option>high to price</option>
                    <option>low to high</option>
                    <option>averaging</option>
                  </select>
                </div>
                <div className={Style.mainbox}>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <span>
                          <a href={item.url}>
                            <img src={item.img} alt="" />
                          </a>
                          <div className={Style.text}>
                            <h2>{item.type}</h2>
                            <a href={item.url}>{item.design}</a>
                            <div className={Style.Icon}>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                              <i className="fa-regular fa-star"></i>
                            </div>
                            <h3>
                              {item.number} <strong>{item.price}</strong>
                            </h3>
                          </div>
                          <div className={Style.sale}>
                            <h2>{item.sale}</h2>
                          </div>
                          <div className={Style.cart}>
                            <a href={item.url}>
                              <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                          </div>
                        </span>
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

export default ShopSection;
