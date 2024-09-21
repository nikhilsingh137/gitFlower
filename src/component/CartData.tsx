import React, { useEffect, useState } from "react";
import Style from "./cartData.module.scss";

interface IDelete {
  handleDelete: any;
}

const CartData: React.FC<IDelete> = ({ handleDelete }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const storeData = localStorage.getItem("Shop");
    const newData = storeData ? JSON.parse(storeData) : [];
    setCart(newData);
    const initialCounts: { [key: string]: number } = {};
    newData.forEach((item: any) => {
      initialCounts[item.id] = 1;
    });
    setCounts(initialCounts);
  }, []);

  useEffect(() => {
    let total = 0;
    cart.forEach((item: any) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      total += price * (counts[item.id] || 1);
    });
    setSubtotal(total);
  }, [counts, cart]);

  const handleDecrease = (id: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 1) - 1, 1),
    }));
  };

  const handleIncrease = (id: string) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1,
    }));
  };

  return (
    <div className={Style.CartData}>
      <div className={Style.wrapper}>
        {cart &&
          cart.map((item) => {
            const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
            const quantity = counts[item.id] || 1;
            const itemTotal = price * quantity;
            return (
              <>
                <div className={Style.content}>
                  <span>
                    <img src={item.img} alt="" />
                    <div className={Style.number}>
                      <h2>{item.title}</h2>
                      <div className={Style.side}>
                        <button onClick={() => handleDecrease(item.id)}>
                          -
                        </button>
                        <p>{quantity}</p>
                        <button onClick={() => handleIncrease(item.id)}>
                          +
                        </button>
                      </div>
                    </div>
                  </span>
                  <div
                    className={Style.cross}
                    onClick={() => handleDelete(item.id)}
                  >
                    <h2>X</h2>
                    <h3>${itemTotal.toFixed(2)}</h3>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className={Style.total}>
        <h2>Subtotal:</h2>
        <h3>${subtotal.toFixed(2)}</h3>
      </div>

      <div className={Style.button}>
        <a href="#/#">View Cart</a>
        <a href="#/#">CheckOut</a>
      </div>
    </div>
  );
};

export default CartData;
