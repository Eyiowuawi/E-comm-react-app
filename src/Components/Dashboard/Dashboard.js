import React from 'react'
import { useState } from 'react';
import './Dashboard.css'
import '../../Pages/ContactUs/ContactUs.css'
import {BsList, BsGrid3X3GapFill} from 'react-icons/bs'
// import Addidas from '../Addidas/Addidas'
import AddidasShoe from '../../Assets/Images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.svg'
import Slider from '../../Assets/Images/slider.png'
import Colors from '../../Assets/Images/colors.png'
import List from '../../Assets/Images/switch-list.png'
import Grid from '../../Assets/Images/switch.png'
import ProductCardGrid from '../ProductCardGrid/ProductCardGrid'
import ProductCardList from '../ProductCardList/ProductCardList'

// import { Switch } from 'react-router-dom'
export const Dashboard = () => {
  const [grid, setGrid] = useState(true);
  return (
    <>
      <div className="contactUs-nav">
        <ul>
          <li>Home</li>
          <span>/</span>
          <li>Hot</li>
        </ul>
      </div>
      <section class="dashboard">
        <div className="dash_lf">
          <div className="dash-container">
            <div className="dash-content">
              <h1>Hot deals</h1>
              <div className="hot-list">
                <span>
                  <a href="#">Nike</a>
                </span>
                <span>2</span>
              </div>
              <div className="hot-list">
                <span>
                  <a href="#">Airmax</a>
                </span>
                <span>48</span>
              </div>
              <div className="hot-list">
                <span>
                  <a href="#">Nike</a>
                </span>
                <span>14</span>
              </div>
              <div className="hot-list">
                <span>
                  <a href="#">Adidas</a>
                </span>
                <span>15</span>
              </div>
              <div className="hot-list">
                <span>
                  <a href="#">Vans</a>
                </span>
                <span>23</span>
              </div>
              <div className="hot-list">
                <span>
                  <a href="#">All Stars</a>
                </span>
                <span>1</span>
              </div>
              <div className="hot-list">
                <span>
                  <a href="#">Adidas</a>
                </span>
                <span>95</span>
              </div>
            </div>
          </div>
          <div className="dash-container">
            <div className="dash-content">
              <h1>PRICES</h1>
              <div className="hot-list">
                <span>
                  <a href="#">Range:</a>
                </span>
                <span>$13.99 - $25.99</span>
              </div>
              <div className="range-bar">
                <img src={Slider} alt="range-bar" />
              </div>
            </div>
          </div>
          <div className="dash-container">
            <div className="dash-content">
              <h1>COLORS</h1>
              <div className="Colors">
                <img src={Colors} alt="colors" />
              </div>
            </div>
          </div>
          <div className="dash-container">
            <div className="dash-content">
              <h1>BRAND</h1>
              <div className="hot-list">
                <span>
                  <a href="#">Nike</a>
                </span>
                <span>99</span>
              </div>
              <div className="hot-list">
                <span>
                  <a href="#">Nike</a>
                </span>
                <span>99</span>
              </div>
              <div className="hot-list">
                <span>
                  <a href="#">Adidas</a>
                </span>
                <span>99</span>
              </div>
              <div className="hot-list">
                <span>
                  <a href="#">Siemens</a>
                </span>
                <span>99</span>
              </div>
            </div>
          </div>
          <div className="dash-container">
            <div className="dash-content">
              <h2>MORE</h2>
            </div>
          </div>
        </div>
        <div className="dash_rt">
          <div className="d-addidas">
            <div class="d-addidas_container">
              <div class="d-addidas_text">
                <h1> Adidas Men Running Sneakers </h1>
                <p> Performance and design.Taken right to the edge. </p>
                <h3> SHOP NOW </h3> <div class="thick_line"> </div>
              </div>
              <div class="d-addidas_img">
                <img src={AddidasShoe} alt="addidas" />
              </div>
            </div>
          </div>
          <div className="dash-container">
            <div className="dash-rt-2">
              <div className='dash-rt-2a'>
                  <span>13 items</span>
                  <div>
                      <span className='dash-span'>Sort By</span>
                      <select name="name" id="name" placeholder="name">
                      <option value="Nike">Nike</option>
                      <option value="Adidas">Adidas</option>
                      <option value="Siemen">Siemen</option>
                      <option value="Vans">Vans</option>
                      <option value="AirMax">Airmax</option>
                      </select>
                  </div>
                  <div>
                      <span>Show</span>
                      <select name="name" id="name">
                      <option value="Nike">10</option>
                      <option value="Adidas">20</option>
                      <option value="Siemen">40</option>
                      <option value="Vans">60</option>
                      <option value="AirMax">80</option>
                      </select>
                  </div>
                </div>
                <div className='.dash-rt-2b'>
                    <BsGrid3X3GapFill className='grid'  onClick={()=>setGrid(true)}/>
                    <BsList className='list' fontSize='30px' color='#C1C8CE' onClick={()=>setGrid(false)}/>
                    {/* <img src={Grid} alt="grid" onClick={()=>setGrid(true)}/>
                    <img src={List} alt="list" onClick={()=>setGrid(false)} /> */}
                </div>
            </div>
          </div>
          {grid ? <ProductCardGrid/> : <ProductCardList/>}
        </div>
      </section>
    </>
  )
}
export default Dashboard


