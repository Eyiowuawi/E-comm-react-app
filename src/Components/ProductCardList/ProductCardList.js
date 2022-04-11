import React from 'react'
import './ProductCardList.css'
import ProductCardls from '../ProductCardls/ProductCardls'
// import { arrray } from '../Constant'
// import { useState } from 'react'

import { CartState } from '../../Context/Context'


const ProductCardList = () => {
  const { state: { products } } = CartState(); 

  // const [cart, setCart] = useState([])
  // const handleClick = (item) => {
  //   if(cart.indexOf(item) !== -1) return;
  //   // cart.push(item)
  //   console.log(cart)
  //   setCart([...cart, item])
  // }
  return (
    <div class="product-List">
      {products.map((prod) => (
        <ProductCardls key={prod.id} prod={prod} />
      ))}
    </div>
  );
};
export default ProductCardList
