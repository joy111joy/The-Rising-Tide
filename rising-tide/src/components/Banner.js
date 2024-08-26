import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
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
};

export default Banner;
