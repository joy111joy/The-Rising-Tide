import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import { db } from '../services/Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Treats = () => {
  const [sticks, setSticks] = useState([]);

  useEffect(() => {
    let isMounted = true; // Track if the component is still mounted

    const fetchSticks = async () => {
      try {
        const sticksCollection = collection(db, 'Sticks');
        const sticksSnapshot = await getDocs(sticksCollection);
        if (isMounted) {
          const sticksList = sticksSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setSticks(sticksList);
        }
      } catch (error) {
        console.error('Error fetching sticks:', error);
      }
    };

    fetchSticks();

    return () => {
      isMounted = false; // Cleanup: mark the component as unmounted
    };
  }, []);

  return (
    <div id='Treats'>
      <Banner page='Treats' />
      <div id='SkipCont'>        
        <h2>Skip to:</h2>
            <div id='SkipLinks'>
                <a href='#SticksCont'>Sticks</a>
                <a href=''>Soft Serve</a>
                
            </div>
      </div>




      <h1>Sticks</h1>
      <div id='TreatsCont'>
        <ul id='SticksCont'>
          {sticks.map(stick => (
            <li key={stick.id} className='Treat'>
              <h3>{stick.Name}</h3>
              <p>{stick.Description}</p>
            </li>
          ))}
        </ul>


        



      </div>
    </div>
  );
};

export default Treats;
