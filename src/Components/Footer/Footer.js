import React from 'react'
import './Footer.css';
import Logo from '../../Assets/Images/logo.png';
import Facebook from '../../Assets/Images/facebook.png';
import Twitter from '../../Assets/Images/twitter.png';
import WesternUnion from '../../Assets/Images/Western-union.png';
import Mastercard from '../../Assets/Images/master card.png';
import Paypal from '../../Assets/Images/Paypal.png';
import VisaCard from '../../Assets/Images/VISA_card.png';
const Footer = () => {
    return (
    <footer>
        <div class="footer_container">
            <div class="footer1">
                <div class="footer1_div">
                    <div class="logo">
                        <div class="logo-wrap">
                            <img src={Logo} alt="logo"/>
                        </div>
                        <span class="logo-text">E-comm</span>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                </div>
                <div class="footer1_div2">
                    <h1>Follow Us</h1>
                    <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <div class="socialmediaapp">
                        <img src={Facebook} alt="fb"/>
                        <img src={Twitter} alt="twitter"/>
                    </div>
                </div>
                <div class="footer1_div2">
                    <h1>Contact Us</h1>
                    <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                </div>
            </div>
            <div class="footer2">
                <div class="information">
                    <h1>Information</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div class="information">
                    <h1>Services</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div class="information">
                    <h1>My Account</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div class="information">
                    <h1>Our Offers</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
            </div>
            <div class="payment_card">
                <img src={WesternUnion} alt="paymentcard"/>
                <img src={Mastercard} alt="paymentcard"/>
                <img src={Paypal} alt="paymentcard"/>
                <img src={VisaCard} alt="paymentcard"/>
            </div>
        </div>
    </footer>
    );     
};
export default Footer;