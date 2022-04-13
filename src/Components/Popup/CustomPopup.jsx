import React from 'react'
import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";

import Stepper from '../../Assets/Images/Stepper.png'
import Creditcard from '../../Assets/Images/Credit Card.png'
import Bank from '../../Assets/Images/Bank.png'
import Paypal from '../../Assets/Images/Paypalpop.png'

const CustomPopup = (props) => {
  const [show, setShow] = useState(false);
 
  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };
 
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);
 
  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <h2>
          {/* MAKE PAYMENT */}
          {props.title}
        </h2>
          
          <div>{props.children}</div>
          {/* <div className={popupStyles.stepper}><img src={Stepper} alt="" /></div>
          <div className={popupStyles.content}>
         
          
          <div className={popupStyles.poplf} >
            <div>
              <input className={popupStyles.input1} type="name" placeholder='First Name' />
            </div>
            <div>
              <input className={popupStyles.input1} type="email" placeholder='Email Address' />
            </div>
            <p>Select Method Of Payment</p>
            <div className={popupStyles.paymentcard}>
              <div className={popupStyles.checkbox}>
                <img src={Creditcard} alt="" />
                <span>Credit Card Or Debit</span>
                <input type="checkbox" name="Credit Card Or Debit" id="" />
              </div>
              <div className={popupStyles.checkbox}>
                <img src={Paypal} alt="" />
                <span>Credit Card Or Debit</span>
                <input type="checkbox" name="PayPal" id="" />
              </div>
              <div className={popupStyles.checkbox}>
                <img src={Bank} alt="" />
                <span>Credit Card Or Debit</span>
                <input type="checkbox" name="Bank Transfer" id="" />
              </div>
            </div>
          </div>
          <div  className={popupStyles.poprt}>
            <div>
              <input type="name" placeholder='Last Name' />
            </div>
            <div>
              <textarea className={popupStyles.txtarea} placeholder='Address for Delivery' name="" id="" cols="20" rows="5"></textarea>
            </div>
            <div>
              <input type="name" placeholder='Mobile Phone' />
            </div>
          </div>         
          </div>
          <button className={popupStyles.gotopayment}>Go To Payment</button> */}
      </div>
    </div>
  );
};
 
CustomPopup.propTypes = {
  // title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;
 