import React, { useEffect, useState } from "react";
import Style from "./sidebar.module.scss";
import CartData from "../component/CartData";

interface IType {
  handleClose: any;
}

const Sidebar: React.FC<IType> = ({ handleClose }) => {
  const [cartItem, setCartItem] = useState<any[]>([]);

  useEffect(() => {
    const storeData = localStorage.getItem("Shop");
    const newData = storeData ? JSON.parse(storeData) : [];
    setCartItem(newData);
  }, []);

  const handleRemove = (id: any) => {
    const updatedData = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedData);
    localStorage.setItem("Shop", JSON.stringify(updatedData));
  };
  return (
    <div className={Style.divide}>
      <div className={Style.text}>
        <h2>Shopping Cart </h2>
        <h3 onClick={handleClose}>X</h3>
      </div>
      <div className={Style.paragraph}>
        {cartItem.length > 0 ? (
          <CartData handleDelete={handleRemove} />
        ) : (
          <p>No Product is added</p>
        )}
      </div>
      {cartItem.length === 0 && (
        <div className={Style.button}>
          <a href="/shop">Continue Shopping</a>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
