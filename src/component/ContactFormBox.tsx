import React, { useState } from "react";
import Style from "./contactFormbox.module.scss";

interface IType {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactFormBox = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  const handleChange = (e: any) => {
    const newData: IType = { ...data, [e.target.id]: e.target.value };
    setData(newData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (data.name === "") {
      setError("This field is required");
    } else {
      setError("");
    }

    if (data.lastName === "") {
      setError("This field is required");
    } else {
      setError("");
    }

    if (data.email === "") {
      setError1("This field is required");
    } else {
      setError1("");
    }

    if (data.message === "") {
      setError2("This field is required");
    } else {
      setError2("");
    }

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        message: data.message,
      }),
    };

    fetch("http://localhost:4000/post", options)
      .then((value) => value.json())
      .then((detail) => console.log(detail));

    fetch("http://localhost:4000/send-email", options)
      .then((value) => value.json())
      .then((detail) => console.log(detail));
  };
  return (
    <div className={Style.contactFormbox}>
      <form onSubmit={handleSubmit}>
        <div className={Style.formbox}>
          <label>
            Name<span>*</span>
          </label>
          <div className={Style.box}>
            <div className={Style.data}>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={handleChange}
              />
              <h2>first</h2>
              <span className={Style.error}>{error}</span>
            </div>
            <div className={Style.data}>
              <input
                type="text"
                id="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
              <h2>last</h2>
              <span className={Style.error}>{error}</span>
            </div>
          </div>
        </div>
        <div className={Style.formbar}>
          <label>
            Email<span>*</span>
          </label>
          <div className={Style.boxdata}>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={handleChange}
            />
            <span className={Style.error}>{error1}</span>
          </div>
        </div>
        <div className={Style.formbar}>
          <label>
            Comment or Message<span>*</span>
          </label>
          <div className={Style.boxdata}>
            <textarea
              value={data.message}
              onChange={handleChange}
              id="message"
            ></textarea>
            <span className={Style.error}>{error2}</span>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactFormBox;
