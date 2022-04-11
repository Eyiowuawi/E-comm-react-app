import React from 'react'
import './ProductCardls.css'
import { Rating } from 'semantic-ui-react'
import { BiCart } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import { CartState } from '../../Context/Context'

const ProductCardls = ({ prod }) => {
  // const { image, productName, price, initialPrice, percentageOff, hot } = item
  const {
    state:{ cart }, 
    dispatch,
  }=CartState();

  
  const add= ()=>{
    // console.log (cart)
    return dispatch({ type:'ADD_TO_CART', payload:prod})
  }
  console.log(cart)
  return (
    <div className='product-card-ls-cont'>
      <div className="product-card-ls">
        <div className="product-img-ls-cont">
          {prod.hot ? (<h5 className='ls-Hot'>HOT</h5>) : null }
          <img className="product_img-ls" src={prod.image} alt="nikeair1" />
        </div>
        <div className="product-details-cont">
          <h1 class="product-title-ls"> {prod.productName} </h1>
          <div className="review">
            <Rating maxRating={5} defaultRating={1} icon="star" size="small" />
            <span className="review-num">0 reviews</span>
            <span className="review-submit">Submit a review</span>
          </div>
          <div className="ls-line1"></div>
          <div class="product-price-ls">
            <span class="product-amount">${prod.price} </span>{' '}
            <span class="product-crossed-price">${prod.initialPrice} </span>{' '}
            <span class="product-percentage">{prod.percentageOff}</span>{' '}
          </div>
          <p className="product-details">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
            mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
            leifend laorevtr istique et congue. Vivamus adipiscin vulputate g
            nisl ut dolor ...
          </p>
          <div className="product-list-btn">
          {cart.some((p)=>p.id === prod.id) ? (<button className="cart-ls" onClick={()=>{dispatch({ type:'REMOVE_FROM_CART', payload:prod})}}>REMOVE FROM CART</button>):(
            <button className="cart-ls" onClick={add}><BiCart fontsize='50px'/>ADD TO CART</button>
          )}
            {/* {cart.some((p)=>p.id === prod.id) ? (
            <button className="cart-ls" onClick={()=>{dispatch({ type:'ADD_TO_CART', payload:prod})}}>
              <BiCart fontsize="50px" /> Add To Cart
            </button>):(<button className="cart-ls" onClick={()=>{dispatch({ type:'REMOVE_FROM_CART', payload:prod})}}>
              <BiCart fontsize="50px" /> Add To Cart
            </button>)} */}
            <button button className="heart-ls">
              <AiOutlineHeart />
            </button>
          </div>
        </div>
      </div>
      <div className="ls-line2"></div>
    </div>
  );
};
export default ProductCardls
