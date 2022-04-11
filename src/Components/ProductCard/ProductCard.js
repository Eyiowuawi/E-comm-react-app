import React from 'react'
import './ProductCard.css'
import { Rating } from 'semantic-ui-react'
import {BiCart} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"

import { CartState } from '../../Context/Context'

// import Rating from '../../Assets/Images/products/rate.png'
const ProductCard = ({prod}) => {
  // const { image, productName, price, initialPrice, percentageOff, hot } = prod;
  const {
    state:{ cart }, 
    dispatch,
  } = CartState();
 
  const add= ()=>{
    console.log (cart)
    return dispatch({ type:'ADD_TO_CART', payload:prod})
}

 
  return (
    <div class="product-card">
      <div class="product-img_container">
        <img className='product_img' src={prod.image} alt="nikeair1" />
      </div>
      <h1 class="product-card-title"> {prod.productName} </h1>{' '}
      <div type="rating">
      <Rating maxRating={5} defaultRating={1} icon='star' size='small' />
        {/* <img src={Rating} alt="ratings" />{' '} */}
      </div>{' '}
      <div class="product-price">
        <span class="product-card1-amount">${prod.price} </span>{' '}
        <span class="product-card-crossed-price">${prod.initialPrice} </span>{' '}
        <span class="product-card-percentage">{prod.percentageOff}</span>{' '}
      </div>
      {prod.hot ? (<h5 className='Hot'>Hot</h5>) : null }
      <div className="hover">
        <div>
          <button className="heart"><AiOutlineHeart/></button>
          {cart.some((p)=>p.id === prod.id) ? (<button className="cart" onClick={()=>{dispatch({ type:'REMOVE_FROM_CART', payload:prod})}}>X</button>):(
            <button className="cart" onClick={add}><BiCart fontsize='50px'/></button>
          )
          
          }
        
        </div>
      </div> 
    </div>
  );
};
export default ProductCard;
