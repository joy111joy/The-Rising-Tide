import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div id='home'>
        <Banner />

        <section id='HomeCont'>

            <div className='HomeSect'>
            <div className='StickBox'>
                    <img src='/imgs/ICTrioWStraw.png' alt='Vanilla Ice Cream Cone' id='Trio' ></img>
                
                </div>
                <div className='FirstText'>
                <h2>Delicious Home-made Treats</h2>
                    <p>Ice cream is our passion. We create a variety of treats, from cones to cookie sandwiches, 
                        to delight every sweet tooth. Prepared fresh daily, our in-store team offers a selection
                         of flavors for every ice cream lover.</p>

                </div>
                <div id='MobileImages'>
                    <img src='/imgs/Flurry.png' alt='Ice Cream Sandwich' id='Flurry'></img>

                    <img src='/imgs/StrawStick.png' alt='Vanilla Ice Cream Cone' id='Stick' ></img>
                </div>
            </div>
            <div className='HomeSect' id='AltHomeSect'>
                <div className='FirstText'>
                    <h2>Ice Cream Cakes for any Occasion</h2>
                    <p>Birthdays, Anniversaries, or just because, our ice cream cakes are perfect for any occasion. 
                        We offer many flavours, designs, and sizes to quench your cake cravings.

                        <br /> <br />

                        We reccomend placing your cake order at least 48 hours in-advance to ensure 
                        we can have your cake ready for you.

                    </p>

                </div>
                    <div className='StickBox'>
                        <img src='/imgs/Cakes.png' alt='Ice Cream Cake' id='Cake'></img>   
                    </div>
                    <div id='MobileImages'>
                    <img src='/imgs/StrawDeluxe.png' alt='Ice Cream Cake' id='StrawCake'></img>
                    <h2>Strawberry Shortcake Deluxe</h2>
                    </div>
            </div>
            <div className='FinalHomeSect'>
                <div>
                    <h2>Come visit us!</h2>
                    <p>Our store is located at 305 Conception Bay Highway. 
                        <br></br> <br></br>
                        If you have any questions or would like to place an order, please call us at: <br/> (709) 229-7249.
                    </p> 
                </div>
            </div>
        </section>
    </div>
  );
};

export default Home;
