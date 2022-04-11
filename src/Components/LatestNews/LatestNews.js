import React from 'react'
import './LatestNews.css'
import Nike from '../../Assets/Images/Nike_logo_emblem_logotype 1.png'
import Figma from '../../Assets/Images/figma-1-logo 1.png'
import Kronos from '../../Assets/Images/kronos-logo-1-1 2.png'

function LatestNews() {
  return (
    <section class="latest_news">
      <h1> LATEST NEWS </h1>{' '}
      <div class="latest_news_container">
        <div class="news_cont">
          <div class="news_img">
            <img src={Nike} alt="nike" />
          </div>{' '}
          <div class="news_text">
            <h3> 01 Jan, 2015 </h3> <h2> Fashion Industry </h2>{' '}
            <p>
              {' '}
              Lorem ipsum is simply dummy text of the printing and typseting
              industry.{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
        <div class="news_cont">
          <div class="news_img">
            <img src={Figma} alt="figma" />
          </div>{' '}
          <div class="news_text">
            <h3> 01 Jan, 2015 </h3> <h2> Best Design Tools </h2>{' '}
            <p>
              {' '}
              Lorem ipsum is simply dummy text of the printing and typseting
              industry.{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
        <div class="news_cont">
          <div class="news_img">
            <img src={Kronos} alt="Kronos" />
          </div>{' '}
          <div class="news_text">
            <h3> 01 Jan, 2015 </h3> <h2> HR Community </h2>{' '}
            <p>
              {' '}
              Lorem ipsum is simply dummy text of the printing and typseting
              industry.{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  )
}

export default LatestNews
