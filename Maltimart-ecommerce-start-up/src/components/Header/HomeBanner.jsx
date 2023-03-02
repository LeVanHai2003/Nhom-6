import React from 'react'
import { NavLink } from 'react-router-dom';
import Bannermain from '../../assets/images/slider/25.jpg';
import Banner1 from '../../assets/images/slider/22.jpg';
import Banner2 from '../../assets/images/slider/23.jpg';


const HomeBanner = () => {
  return (
    <>
    <div className="slider-with-banner pt-4 pb-5">
  <div className="container">
    <div className="row">
      {/* Begin Slider Area */}
      <div className="col-lg-8 col-md-8">
        <div className="slider-banner">
          
            {/* Begin Single Slide Area */}
            <div className="main-bannert1">
            <NavLink to={'#'}> <img src={Bannermain}  /></NavLink>
            </div>
            
            {/* Single Slide Area End Here */}
          
        </div>
      </div>
      {/* Slider Area End Here */}
      {/* Begin Li Banner Area */}
      <div className="col-lg-4 col-md-4  text-center pt-xs-3 ">
        <div className="li-banner ">
          <a href="/#">
            <img src={Banner1}  />
          </a>
        </div>
        <div className="li-banner mt-2 mt-sm-3 mt-xs-3">
          <a href="/#">
            <img src={Banner2}  />
          </a>
        </div>
      </div>
      {/* Li Banner Area End Here */}
    </div>
  </div>
</div>

    
    </>
  )
}

export default HomeBanner
