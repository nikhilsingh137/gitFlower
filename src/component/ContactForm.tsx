import React, { useEffect } from "react";
import Style from "./contactForm.module.scss";
import { fetchContactForm } from "../redux/Slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ContactFormBox from "./ContactFormBox";

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.detail);
  useEffect(() => {
    dispatch(fetchContactForm());
  }, [dispatch]);
  return (
    <div className={Style.ContactForm}>
      <div className={Style.wrapper}>
        {data.contactFormData &&
          data.contactFormData.map((item) => {
            return (
              <div className={Style.content}>
                <div className={Style.header}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                <div className={Style.address}>
                  <h2>{item.addressName}</h2>
                  <h3>{item.address}</h3>
                </div>
                <div className={Style.detail}>
                  <div className={Style.phone}>
                    <h2>{item.phoneName}</h2>
                    <h3>{item.phone}</h3>
                  </div>
                  <div className={Style.email}>
                    <h2>{item.emailName}</h2>
                    <h3>{item.email}</h3>
                  </div>
                </div>
                <div className={Style.media}>
                  <h2>{item.media}</h2>
                  <div className={Style.icon}>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                </div>
                <div className={Style.button}>
                  <a href="/formData">Open Form Data</a>
                </div>
              </div>
            );
          })}
        <ContactFormBox />
      </div>
    </div>
  );
};

export default ContactForm;
