import React from 'react'
import './ProductCardGrid.css'
import ProductCard from '../ProductCard/ProductCard'
// import { arrray } from '../Constant'
import { useState } from 'react'

import { CartState } from '../../Context/Context'


const ProductCardGrid = () => {

  const { state: { products } } = CartState();
  const [noOfElement, setnoOfElement] = useState(5); 
  const loadMore =()=>{
    setnoOfElement(noOfElement + noOfElement)
  }


  const slice= products.slice(0, noOfElement ); 

  // const [cart, setCart] = useState([])
  // const handleClick = (item) => {
  //   if(cart.indexOf(item) !== -1) return;
  //   // cart.push(item)
  //   console.log(cart)
  //   setCart([...cart, item])
  // }
  return (
   <>
   <div class="product-grid">
      {slice.map((prod) => (
        <ProductCard key={prod.id} prod={prod} />
      ))}
    </div>
      <div className='loadmore'> 
        <button className='load-btn' onClick={()=>loadMore()}>LOAD MORE</button>
        <div className='load-dash'></div>
      </div>
      </>
  );
};
export default ProductCardGrid
