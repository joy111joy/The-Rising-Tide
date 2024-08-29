import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
        <img src='/imgs/FinalLogo.png' alt='Rising Tide Logo' id='FootLogo'></img>

        <div id='FootInfo'>
            <h2>Rising Tide Convenience</h2>
            <a href="tel:+17092297249">(709) 229-7249</a>
            <p>Harbour Main</p>
            <p>305 Conception Bay Highway</p>
        </div>

        <div id='Socials'>
            <h2>Follow Us!</h2>
            <img src='/imgs/Facebook_icon.png' alt='Facebook Logo' id='Facebook'></img>
        </div>
    </footer>

  );
};

export default Footer;
