import React, { useEffect } from "react";
import Style from "./customer.module.scss";
import { fetchCustomer } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Customer = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);
  return (
    <div className={Style.Customer}>
      <div className={Style.wrapper}>
        {data.customerData &&
          data.customerData.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.header}>
                  <h2>{item.title}</h2>
                  <h3>{item.slug}</h3>
                  <p>{item.text}</p>
                </div>
                <div className={Style.mainbox}>
                  {item.data &&
                    item.data.map((item) => {
                      return (
                        <div className={Style.detail}>
                          <div className={Style.icon}>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <div className={Style.paragraph}>
                            <p>{item.text}</p>
                          </div>
                          <div className={Style.profile}>
                            <span>
                              <img src={item.img} alt="" />
                            </span>
                            <h2>
                              {item.name}
                              <br />
                              <span>{item.post}</span>
                            </h2>
                          </div>
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

export default Customer;
