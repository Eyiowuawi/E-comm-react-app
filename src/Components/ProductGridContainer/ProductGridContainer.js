import React from 'react'
import ProductCardGrid from '../ProductCardGrid/ProductCardGrid'
import './ProductCardContainer.css'

function ProductGridContainer() {
  return (
    <div>
      <section class="section3">
        <h1 className="section_3_bestseller"> BEST SELLER </h1>{' '}
        <div className="section3_nav">
          <ul>
            <li> All </li> <li> Bags </li> <li> Sneakers </li> <li> Belt </li>{' '}
            <li> Sun glasses </li>
          </ul>
        </div>
        <ProductCardGrid/>
      </section>
    </div>
  )
}

export default ProductGridContainer
