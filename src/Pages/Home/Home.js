import React from 'react'
import Hero from '../../Components/Hero/Hero.js'
import Card1 from '../../Components/Card1/Card1.js'
import Addidas from '../../Components/Addidas/Addidas.js'
import ProductCardGrid from '../../Components/ProductCardGrid/ProductCardGrid.js'
import Shipping from '../../Components/Shipping/Shipping.js'
import LatestNews from '../../Components/LatestNews/LatestNews.js'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct.js'
const Home = () => {
  return (
    <>
      <Hero />
      <Card1 />
      <ProductCardGrid /> 
      <Addidas /> 
      <Shipping />
      <LatestNews />
      <FeaturedProduct />
    </>
  )
}
export default Home
