import React from 'react'
import './Shipping.css'
import shipping from '../../Assets/Images/shipping.png'
import Dollar from '../../Assets/Images/circled dollar.png'
import support from '../../Assets/Images/support.png'
function Shipping() {
  return (
    <section class="shipping">
        <div class="shipping_card">
            <div class="shipping_card_img">
                <img src={shipping} alt="shipping"/>
            </div>
            <h1>FREE SHEEPING</h1>
            <p>Lorem ipsum is simply dummy text of the prinying and typseting industry.</p>
        </div>
        <div class="shipping_card">
            <div class="shipping_card_img">
                <img src={Dollar} alt="refund"/>
            </div>
            <h1>100% REFUND</h1>
            <p>Lorem ipsum is simply dummy text of the prinying and typseting industry.</p>
        </div>
        <div class="shipping_card">
            <div class="shipping_card_img">
                <img src={support} alt="support"/>
            </div>
            <h1>SUPPORT</h1>
            <p>Lorem ipsum is simply dummy text of the prinying and typseting industry.</p>
        </div>
    </section>
  )
}

export default Shipping