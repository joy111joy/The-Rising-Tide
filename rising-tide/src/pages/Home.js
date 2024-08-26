import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div id='home'>
        <Banner />

        <section id='HomeCont'>
        <div className='StickBox'>
                    <img src='/imgs/ICTrio4.png' alt='Strawberry Ice Cream Cone' id='Flurry'></img>
                </div>
            <div className='HomeSect'>

                <div>
                    <h2>Delicious Home-made Treats</h2>
                    <p> Ice cream is more than just a dessert for us; it’s our passion and specialty. 
                        We take pride in creating a range of treats that bring joy to every bite. 
                        From cones to cookie sandwiches, our treats will satisfy any sweet tooth.
                        <br /> <br />
                        Every day, our skilled team works in-store to prepare these delectable treats.
                        With a selection of flavors, we have ice cream for every kind 
                        of ice cream lover.
                    </p>
                </div>
            </div>
            <div className='HomeSect' id='AltHomeSect'>
                <div>
                    <h2>Ice Cream Cakes for any Occasion</h2>
                    <p>Birthdays, Anniversaries, or just because, our ice cream cakes are perfect for any occasion. 
                        We offer many flavours, designs, and sizes to quench your cake cravings.

                        <br /> <br />

                        We reccomend placing your cake order at least 48 hours in-advance to ensure 
                        we can have your cake ready for you.

                    </p>
                </div>

                <img src='/imgs/Cakes.png' alt='Ice Cream Cake'></img>
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
