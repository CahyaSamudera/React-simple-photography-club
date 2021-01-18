import React from 'react';
import './Info.css';
import business from '../../images/camera-02.jpg';

const Info = () => {
  return (
    <>
      <div className='info'>
        <img src={business} alt='' />
        <div>
          <h2>Kembangkan Hobimu Menjadi Bisnis</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            perspiciatis, delectus esse voluptas officiis dignissimos omnis
            atque voluptate velit architecto adipisci qui consequatur ea aliquid
            obcaecati beatae assumenda ad id.
          </p>
          <a href='#hero'>
            <button className='btn'>Baca</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Info;
