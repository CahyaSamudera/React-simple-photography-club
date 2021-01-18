import React from 'react';
import './Hero.css';
import background from '../../images/camera-01.jpg';

const Hero = () => {
  return (
    <>
      <div className='top-container' id='hero'>
        <header
          className='showcase'
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1>Salurkan Hobi Fotografimu</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quis
            omnis eius laborum aut reprehenderit?
          </p>
          <a href='#hero' className='btn'>
            Baca
          </a>
        </header>
        <div className='top-box top-box-a'>
          <h4>Membership</h4>
          <p className='price'>199k/bulan</p>
          <a href='#hero' className='btn'>
            Bergabung
          </a>
        </div>
        <div className='top-box top-box-b'>
          <h4>Pro Membership</h4>
          <p className='price'>299k/bulan</p>
          <a href='#hero' className='btn'>
            Bergabung
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
