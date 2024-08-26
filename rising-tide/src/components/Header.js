import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <div className='HeadTop'>
            <div className='Overlay'></div>
            <div className='Content'>
            <Link>Rising Tide Convenience</Link>
            </div>
        </div>
        <div className='HeadBottom'>
            <div className='Overlay'></div>
            <div className='Content'>
                <nav>
                        <Link>Treats</Link>
                        <Link>Order</Link>
                        <Link>About</Link>
                </nav>
            </div>
        </div>
    </header>
  );
};

export default Header;
