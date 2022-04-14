import React from 'react'
import './ProductCardList.css'
import ProductCardls from '../ProductCardls/ProductCardls'
// import { arrray } from '../Constant'
import { useState } from 'react'

import { CartState } from '../../Context/Context'


const ProductCardList = () => {
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
    <div class="product-List">
      {slice.map((prod) => (
        <ProductCardls key={prod.id} prod={prod} />
      ))}
    </div>
    <div className='loadmore'> 
        <button className='load-btn' onClick={()=>loadMore()}>Load More </button>
        <div className='load-dash'></div>
      </div>
    </>
  );
};
export default ProductCardList
