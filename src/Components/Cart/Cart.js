// import React from 'react'
import '../../Pages/ContactUs/ContactUs.css'
import './Cart.css'
import popupStyles from '../Popup/custom-popup.module.css'
import CartItem from './CartItem'
import React, { useState, useEffect } from 'react';
import { CartState } from '../../Context/Context';
// import styled from 'styled-components';
// import Modal from '../Modal/Modal'
import CustomPopup from "../Popup/CustomPopup";
import Creditcard from '../../Assets/Images/Credit Card.png'
import Creditcard2 from '../../Assets/Images/CreditCard.png'
import Bank from '../../Assets/Images/Bank.png'
import Paypal from '../../Assets/Images/Paypalpop.png'
import Stepper from '../../Assets/Images/Stepper.png'
import Stepper2 from '../../Assets/Images/Stepper2.png'
import Stepper3 from '../../Assets/Images/Stepper3.png'
import Success from '../../Assets/Images/Success Icon.png'
import Prev from '../../Assets/Images/prev.png'



function Cart() {
  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(prev => !prev);
  //   console.log(showModal);
  // };

  const {
    state:{ cart }, 
    dispatch, }
   = CartState();


  const [visibility, setVisibility] = useState(false);
 
  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const [total, setTotal]=useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr)=> acc + Number(curr.price)* curr.qty, 0 ));
  }, [cart]);

  const [payment, setPayment] = useState(0);
  const totalPrice = total+20;
  const FormTitle= ['Make Payment', 'Make Payment', 'Make Payment'];

  const PageDisplay=()=>{
    if (payment === 0) {
      return <div className='page1'>
      <div className={popupStyles.stepper}><img src={Stepper} alt="" /> </div>
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
      <button className={popupStyles.gotopayment} onClick={()=> {setPayment((currPayment)=> currPayment + 1)}}>Go To Payment</button>
    </div>;
    } else if (payment === 1){
      return <div className='page2'>
      <div className={popupStyles.stepper}><img src={Stepper2} alt="" /></div>
      <div className={popupStyles.content}>         
        <div className={popupStyles.poplf} >
          <div>
            <img src={Creditcard2} alt="creditcard" />
          </div>
        </div>
        <div  className={popupStyles.poprt}>
         <div>
            <input type="number" placeholder='Card Number' />
          </div>
          <div className={popupStyles.input3div}>
            <input className={popupStyles.input3} type="number" placeholder='Expiry' />
            <input className={popupStyles.input3} type="number" placeholder='CVV' />
          </div>
          <div>
            <input type="name" placeholder='Holder Number' />
          </div>
          <div className={popupStyles.checkbox2}>
            <input type="checkbox" name="Credit Card Or Debit" id="" />
            <span className={popupStyles.savecard}> Save this Credit Card</span>
          </div>
        </div>         
      </div>
      <button className={popupStyles.gotopayment} onClick={()=> {setPayment((currPayment)=> currPayment + 1)}}>Confirm</button>
    </div>;
    }
    else {
      return <div >
            <img className={popupStyles.stepper} src={Stepper3} alt="stage3" />
            <div className={popupStyles.stepper}>
              <img src={Success} alt="success icon" />
            </div>
            <h4 className={popupStyles.h4}>Success</h4>
            <button className={popupStyles.gotopayment}>Complete</button>        
          </div>;

    }    
  };
  
  return (
    <div className='cart-cont'>
      <div className="contactUs-nav">
        <ul>
          <li>Home</li>
          <span>/</span>
          <li>Hot</li>
          <span>/</span>
          <li>Nike Airmax 270 react</li>
        </ul>
      </div>
      <div className="cart-container">
        <div className="cart-title">
          <div className="cart-title-1">
            <h1>PRODUCT</h1>
          </div>
          <div className="cart-title-2">
            <h1>PRICE</h1>
          </div>
          <div className="cart-title-2">
            <h1>QTY</h1>
          </div>
          <div className="cart-title-2">
            <h1>UNIT PRICE</h1>
          </div>
        </div>
        {cart.map((prod)=>(
          <CartItem key={prod.id} prod={prod}/>
        ))}
      </div>
      <div className="total-payment"> 
        <div className='redeem'>
            <div className='redeem-container' >
                <input className='redeem-input' type="text" placeholder='Voucher code' />
                <button className='btn-redeem'>Redeem</button>
            </div>
        </div>
        <div className="checkout-container">
          <div className="sub-total">
            <span>Subtotal</span><span>${total}</span>
          </div>
          <div className="sub-total">
            <span>Shipping fee</span><span>$20</span>
          </div>
          <div className="sub-total">
            <span>Coupon</span><span>No</span>
          </div>
          <div className="total">
            <span>TOTAL</span><span>${totalPrice}</span>
          </div>
          <button onClick={(e) => setVisibility(!visibility)} className='checkout'>Check out</button>
          {/* <button onClick={openModal} className='checkout'>Check out</button> */}
          {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
          <CustomPopup onClose={popupCloseHandler} show={visibility} title={FormTitle[payment]}>
          {PageDisplay()}
          <button className={popupStyles.prev} disabled={payment == 0} onClick={()=> {setPayment((currPayment)=> currPayment - 1)}}>
            <img src={Prev} alt='prev'></img>
          </button>
          {/* <button disabled={payment == FormTitle.length - 1} onClick={()=> {setPayment((currPayment)=> currPayment + 1)}}>next</button> */}
          </CustomPopup>
        </div>
      </div>
    </div>
  )
}

export default Cart
