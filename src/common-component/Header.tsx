import React, { useEffect, useState } from "react";
import Style from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchHeader } from "../redux/Slice";
import Sidebar from "./Sidebar";
import Side from "./Side";

const Header = () => {
  const [active, setActive] = useState("1");
  const [Icon, setIcon] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);

  useEffect(() => {
    dispatch(fetchHeader());
    const storedItems = localStorage.getItem("Shop");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      const totalCount = items.reduce(
        (total: any, item: any) => total + (item.quantity || 1),
        0
      );
      setCartCount(totalCount);
    }
  }, [dispatch]);

  const updateCartCount = () => {
    const storedItems = localStorage.getItem("Shop");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      const totalCount = items.reduce(
        (total: any, item: any) => total + (item.quantity || 1),
        0
      );
      setCartCount(totalCount);
    }
  };

  useEffect(() => {
    window.addEventListener("storage", updateCartCount);
    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const activeItem = data.headerData?.find((item) => item.url === currentUrl);
    if (activeItem) {
      setActive(activeItem.id);
    }
  }, [data.headerData]);

  const handleSide = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    if (sidebar && overlay) {
      sidebar.style.width = "450px";
      overlay.style.width = "100%";
      document.body.style.overflow = "hidden";
    }
  };

  const handleClose = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    if (sidebar && overlay) {
      sidebar.style.width = "0px";
      overlay.style.width = "0%";
      document.body.style.overflow = "";
    }
  };

  const handleActive = (id: any) => {
    setActive(id);
  };

  const handleIcon = () => {
    setIcon(!Icon);
  };
  return (
    <div className={Style.header}>
      {Icon && (
        <div className={Style.sideNav}>
          <Side />
        </div>
      )}
      <div className={Style.overlay} id="overlay"></div>
      <div className={Style.sidebar} id="sidebar">
        <Sidebar handleClose={handleClose} />
      </div>
      <div className={Style.wrapper}>
        <div className={Style.logo}>
          <h2>Flower Shop</h2>
        </div>
        <div className={Style.navbar}>
          <ul>
            {data.headerData &&
              data.headerData.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => handleActive(item.id)}
                    className={`${active === item.id ? Style.active : ""}`}
                  >
                    <a href={item.url} onClick={() => handleActive(item.id)}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={Style.Icon} onClick={handleSide}>
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
            <div className={Style.number}>{cartCount}</div>
          </span>
        </div>
        <div
          className={`${Style.Open} ${Icon ? Style.active : ""}`}
          onClick={handleIcon}
        >
          <span className={`${Icon ? Style.line1 : ""}`}></span>
          <span className={`${Icon ? Style.line2 : ""}`}></span>
          <span className={`${Icon ? Style.line3 : ""}`}></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
