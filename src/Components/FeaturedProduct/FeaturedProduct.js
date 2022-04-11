import React from 'react'
import './FeaturedProduct.css'
import './FeaturedProduct.css'
import BlueSwade from '../../Assets/Images/blue_swade_sneakers.png'
import { Rating } from 'semantic-ui-react'
function FeaturedProduct() {
    return ( 
    <div className = 'featured_section' >
        <h1>Featured Product</h1>
        <div className='featured-container'>
            <div className = 'featured' >
                <div className = 'featured_img' >
                    <img src={BlueSwade} alt="swade" />
                </div>
                <div className = 'featured_text' >
                    <h2>Blue Swade Nike Sneakers</h2>
                    <div><Rating maxRating={5} defaultRating={4} icon='star' size='small'/></div>
                    <span className='f-price'>$499</span>
                    <span className='crossed-price'>$599</span>
                </div>
            </div>
            <div className = 'featured' >
                <div className = 'featured_img' >
                    <img src={BlueSwade} alt="swade" />
                </div>
                <div className = 'featured_text' >
                    <h2>Blue Swade Nike Sneakers</h2>
                    <div><Rating maxRating={5} defaultRating={4} icon='star' size='small'/></div>
                    <span className='f-price'>$499</span>
                    <span className='crossed-price'>$599</span>
                </div>
            </div>
            <div className = 'featured' >
                <div className = 'featured_img' >
                    <img src={BlueSwade} alt="swade" />
                </div>
                <div className = 'featured_text' >
                    <h2>Blue Swade Nike Sneakers</h2>
                    <div><Rating maxRating={5} defaultRating={4} icon='star' size='small'/></div>
                    <span className='f-price'>$499</span>
                    <span className='crossedx-price'>$599</span>
                </div>
            </div>
        </div>
        <div className='search'>
            <div className='search-container' >
                <input className='search-input' type="text" placeholder='Search query...' />
                <button className='btn-search'>Search</button>
            </div>
        </div>
    </div>
    )
}

export default FeaturedProduct