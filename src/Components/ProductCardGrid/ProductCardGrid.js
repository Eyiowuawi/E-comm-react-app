import React from 'react'
import './ProductCardGrid.css'
import ProductCard from '../ProductCard/ProductCard'
// import { arrray } from '../Constant'
// import { useState } from 'react'

import { CartState } from '../../Context/Context'


const ProductCardGrid = () => {

  const { state: { products } } = CartState(); 

  // const [cart, setCart] = useState([])
  // const handleClick = (item) => {
  //   if(cart.indexOf(item) !== -1) return;
  //   // cart.push(item)
  //   console.log(cart)
  //   setCart([...cart, item])
  // }
  return (
    <div class="product-grid">
      {products.map((prod) => (
        <ProductCard key={prod.id} prod={prod} />
      ))}
    </div>
  );
};
export default ProductCardGrid
