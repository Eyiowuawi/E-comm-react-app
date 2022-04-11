import React from 'react'
import './ContactUs.css'
import ContactUsbg from '../../Assets/Images/ContactUsbgblue.png'
import Callbg from '../../Assets/Images/call-bg.png'

const ContactUs = () => {
  return (
    <div className='contactUs'>
        <div className='contactUs-nav'>
            <ul>
                <li>Home</li>
                <span>/</span>
                <li>Contact Us</li>
            </ul>
        </div> 
        <div className='contactUs-container'>
            <div className='contactUs-lf-cont'>
                <div>
                    <img src={ContactUsbg} alt="Oncall" />
                </div> 
                <div className='contactUs-txt'>
                    <h2>get in touch</h2>
                    <p>contact@e-comm.ng</p>
                    <p>+234 4556 6665 34</p>
                    <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
                </div>
                <img className='call-bg' src={Callbg} alt="" />
            </div>
            <div className='contactUs-rt-cont'>
                <form class="form">
                    <div class="input-flex-div">
                        <div class="input-flex">
                            <h3>Full Name</h3>
                            <input id="full-name" name="full-name" type="text" placeholder="James Doe"/>
                        </div>
                        <div class="input-flex">
                            <h3>Email</h3>
                            <input type="email" id="Email" name="email" placeholder="jamesdoe@gmail.com"/>
                        </div>
                    </div>
                    <div class="text-area">
                        <h4>Message</h4>
                        <textarea class="text-area-box" cols="35" rows="8" placeholder="Type your message" name="how" id=""></textarea>
                        {/* <button class="submit-btn">SEND MESSAGE</button> */}
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default ContactUs
