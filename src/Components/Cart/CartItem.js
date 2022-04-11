import React from 'react'
import Product2 from '../../Assets/Images/products/imageProduct2.png'
import './Cart.css'
import { CartState } from '../../Context/Context';

function CartItem({prod}) {
  const {dispatch}
   = CartState();
   

  return (
    <div className="cart-title cart-item-container">
          <div className="cart-item-1">
            <button className='delete' onClick={()=>{dispatch({ type:'REMOVE_FROM_CART', payload:prod})}}>X</button>
            <div className='cart-img'>
              <img src={prod.image} alt="" />
            </div>
            <div className="cart-item-name"> <h1>{prod.name}</h1></div>
          </div> 
            <div className="cart-item-2"> <h1>$999</h1></div>
            <div className="cart-item-2"> <h1>+1-</h1></div>
            <div className="cart-item-2"> <h1>${prod.price}</h1></div>
        </div>
  )
}

export default CartItem