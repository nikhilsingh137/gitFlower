import React, { useEffect, useState } from "react";
import Style from "./contactgetData.module.scss";

interface IType {
  _id: "66ef3c6549af1c5b06eb2740";
  name: "nikhil";
  lastName: "Singh";
  email: "nikhilsurvanshi222@gmail.com";
  message: "this is name";
}

const ContactGetData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/get")
      .then((res) => res.json())
      .then((value) => {
        setData(value);
      });
  }, []);
  return (
    <div className={Style.Data}>
      <div className={Style.text}>
        <div className={Style.header}>
          <h2>Name</h2>
          <h2>Email</h2>
          <h2>Message</h2>
        </div>
        {data &&
          data.map((item: IType) => {
            return (
              <>
                <div className={Style.data}>
                  <h2>
                    {item.name} <span>{item.lastName}</span>
                  </h2>
                  <h2>{item.email}</h2>
                  <h2>{item.message}</h2>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ContactGetData;
