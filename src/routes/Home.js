import React from 'react'
import photo from '../assets/herobannerimage.jpg'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
    return (
        <section className='hero'>
          <div className='hero-center'>
            <article className='hero-info'>
              <h1>
                Be Fit App
              </h1>
              <h3>
                Be healthy, smiling and sweaty
              </h3>
              <p>
                Your encyclopedia to healthy lifestyle. We are trusted by thousands of people, be one of them.
              </p>
              <button className='btn'  onClick={() => {
            navigate('/Exercises');
          }}>Check exercises</button>
            </article>
            <article className='hero-images'>
              <img src={photo} className='home-img' alt='woman in gym' />
            </article>
          </div>
        </section>
      );
}

export default Home