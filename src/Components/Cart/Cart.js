// import React from 'react'
import '../../Pages/ContactUs/ContactUs.css'
import './Cart.css'
import CartItem from './CartItem'
import React, { useState, useEffect } from 'react';
import { CartState } from '../../Context/Context';
// import styled from 'styled-components';
// import Modal from '../Modal/Modal'
import CustomPopup from "../Popup/CustomPopup";



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
  }, [cart])

  
  
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
        {/* <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/> */}
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
            <span>TOTAL</span><span>$118</span>
          </div>
          <button onClick={(e) => setVisibility(!visibility)} className='checkout'>Toggle Popup</button>
          {/* <button onClick={openModal} className='checkout'>Check out</button> */}
          {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
          <CustomPopup onClose={popupCloseHandler} show={visibility} title="Hello Jeetendra">
            <h1>Hello This is Popup Content Area</h1>
            <h2>This is my lorem ipsum text here!</h2>
          </CustomPopup>
        </div>
      </div>
    </div>
  )
}

export default Cart
