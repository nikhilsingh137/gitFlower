import React, { useEffect } from "react";
import Style from "./ItemBox.module.scss";
import { fetchShop } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const ItemBox = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchShop());
  }, [dispatch]);
  return (
    <div className={Style.ItemBox}>
      <div className={Style.wrapper}>
        {data.shopData &&
          data.shopData.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.Header}>
                  <h2>{item.heading}</h2>
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
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

export default ItemBox;
