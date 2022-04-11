import React from 'react'
import './Card1.css'
import Blackbag from '../../Assets/Images/image_productblack-bag.png'
import NikeAir1 from '../../Assets/Images/image_productfs-nike_air1.png'
import NikeAir2 from '../../Assets/Images/image_productfs-nike_air2.png'
const Card1 = (props) => {
  return (
    <section className="section2">
      <div className="section2-container">
        <div className="card1">
          <div className="card1_img">
            <img src={Blackbag} alt="bag" />
          </div>{' '}
          <h1 className="card1-title">
            {' '}
            FS - QUILTED <br /> MAXI CROSS BAG{' '}
          </h1>{' '}
          <div className="card1-price1">
            <span className="crossed-price"> $534 .33 </span>{' '}
            <span className="percentage"> 24 % Off </span>{' '}
          </div>{' '}
          <p className="card1-amount card-amt1"> $299 .43 </p>{' '}
        </div>{' '}
        <div className="card1">
          <div className="card1_img">
            <img src={NikeAir1} alt="nike air1" />
          </div>{' '}
          <h1 className="card1-title">
            {' '}
            FS - QUILTED <br /> MAXI CROSS BAG{' '}
          </h1>{' '}
          <div className="card1-price1">
            <span className="crossed-price"> $534 .33 </span>{' '}
            <span className="percentage"> 24 % Off </span>{' '}
          </div>{' '}
          <p className="card1-amount card-amt1"> $299 .43 </p>{' '}
        </div>{' '}
        <div className="card1">
          <div className="card1_img">
            <img src={NikeAir2} alt="nike air2" />
          </div>{' '}
          <h1 className="card1-title">
            {' '}
            FS - QUILTED <br /> MAXI CROSS BAG{' '}
          </h1>{' '}
          <div className="card1-price1">
            <span className="crossed-price"> $534 .33 </span>{' '}
            <span className="percentage"> 24 % Off </span>{' '}
          </div>{' '}
          <p className="card1-amount card-amt1"> $299 .43 </p>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  )
}
export default Card1
