import React from 'react';
import { Link } from 'react-router-dom';


const Banner = ({ page }) => {
  if (page === 'Home') {
    return (
      <div id='Banner'>
      <div className='OverlayBanner'></div>
      <div className='BannerText'>
        <h2>Voted Best Ice Cream <br /> 3 Years in a Row!</h2>
        <Link><img src='/imgs/ViewTreats.svg' alt='Strawberry Ice Cream Cone'></img></Link>
      </div>
      <img src='/imgs/StrawStick.png' alt='Banner Background' id='BannerPic'></img>
      </div>
    );
  } else if (page === 'Treats') {
    return (
      <div id='Banner'>
      <div className='OverlayBanner'></div>
      <div className='BannerText'>
        <h2>Check out our <br></br>selection of treats!</h2>
      </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Banner;
