import React, { useEffect, useState } from "react";
import Style from "./productDetail.module.scss";
import { fetchProductSelling } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [count, setCount] = useState(1);
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchProductSelling());
  }, [dispatch]);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => {
      const newCount = prevCount > 0 ? prevCount - 1 : 1;
      return newCount;
    });
  };

  const handleClick = (shop: any) => {
    const storeData = localStorage.getItem("Shop");
    const newData = storeData ? JSON.parse(storeData) : [];
    if (!newData.some((item: any) => item.id === shop.id)) {
      newData.push(shop);
      localStorage.setItem("Shop", JSON.stringify(newData));
    }
  };

  const filterData =
    data.productsellingData &&
    data.productsellingData.filter((item) => item.url === `/product/${userId}`);
  return (
    <div className={Style.Product}>
      <div className={Style.wrapper}>
        {filterData &&
          filterData.map((item) => {
            const rate = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
            const totalPrice = rate * count;
            return (
              <>
                <div className={Style.content}>
                  <span>
                    <img src={item.img} alt="" />
                  </span>
                  <div className={Style.text}>
                    <div className={Style.file}>
                      <a href="/home">Home</a> /
                      <a href={item.nameurl}>{item.name}</a> /
                      <h2>Custom Floral Designs</h2>
                    </div>
                    <div className={Style.flower}>
                      <a href={item.nameurl}>{item.name}</a>,
                      <a href={item.flowerurl}>{item.flower}</a>
                    </div>
                    <div className={Style.Designs}>
                      <h2>{item.title}</h2>
                      <h3>
                        <h4>{item.rate}</h4>
                        <span>${totalPrice.toFixed(2)}</span>
                        <strong>{item.notice}</strong>
                      </h3>
                      <p>{item.paragraph}</p>
                    </div>
                    <div className={Style.number}>
                      <span>
                        <button onClick={handleIncrease}>+</button>
                        <p>{count}</p>
                        <button onClick={handleDecrease}>-</button>
                      </span>
                      <h3 onClick={() => handleClick(item)}>Add to Cart</h3>
                    </div>
                    <div className={Style.category}>
                      <h2>{item.category}</h2>:
                      <a href={item.nameurl}>{item.name}</a>,
                      <a href={item.flowerurl}>{item.flower}</a>
                    </div>
                    <div className={Style.shipping}>
                      <h2>{item.shipping}</h2>
                      <h3>{item.money}</h3>
                      <h3>{item.refund}</h3>
                      <h3>{item.secure}</h3>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        {filterData &&
          filterData.map((item) => {
            return (
              <>
                <div className={Style.header}>
                  <h2>Related products</h2>
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
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ProductDetail;
