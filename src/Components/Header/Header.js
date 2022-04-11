import React from 'react'
// import Cart from '../../Assets/Images/Cart.png'
import Logo from '../../Assets/Images/logo.png'
import { FaRegUser } from 'react-icons/fa'
import { BiCart } from "react-icons/bi";
import { CartState } from '../../Context/Context';
// import { Link } from "react-router-dom";

const Header = ({setShow}) => {
  const {state: {cart}}=CartState()
  return (
    <header>
      <div className="upper-nav-container">
        <div className="upper-nav">
          <div className="upper-nav-left">
            <div>
              <select className="lang" name="language" id="language">
                <option className="lang-option" value="English">
                  {' '}
                  EN{' '}
                </option>{' '}
                <option className="lang-option" value="French">
                  {' '}
                  FR{' '}
                </option>{' '}
                <option className="lang-option" value="Yoruba">
                  {' '}
                  YR{' '}
                </option>{' '}
              </select>{' '}
              <select className="lang li-fonts-2" name="language" id="currency">
                <option className="currency-option" value="USD">
                  {' '}
                  USD{' '}
                </option>{' '}
                <option className="currency-option" value="EURO">
                  {' '}
                  EURO{' '}
                </option>{' '}
                <option className="currency-option" value="NAIRA">
                  NAIRA
                </option>
              </select>
            </div>
            <div>
                <FaRegUser fontSize='16px'/>    
               <span> My profile </span>{' '}
            </div>{' '}
          </div>{' '}
          <div className="cart" onClick={()=>setShow(false)}>
            <BiCart fontSize='30px'/>
            <span class='item-count'>{cart.length}</span>
          </div>
          <div className="upper-nav-right">
            <span> Items </span> <span> $0 .00 </span>
            <i className="fas fa-search"> </i>
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className="header-container">
        <div className="logo">
          <div className="logo-wrap">
            <img src={Logo} alt="logo" />
          </div>{' '}
          <span className="logo-text"> E - comm </span>{' '}
        </div>{' '}
        <div className="nav-container">
          <ul className="nav-bar">
            <li> HOME </li> <li onClick={()=>setShow(true)}> BAG </li> <li> SNEAKERS </li> <li> BELT </li>{' '}
            <li> CONTACT </li>{' '}
          </ul>{' '}
        </div>{' '}
      </div>{' '}
    </header>
  )
}
export default Header