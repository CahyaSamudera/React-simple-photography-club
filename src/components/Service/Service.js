import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <>
      <div className='boxes' id='services'>
        <div className='box'>
          <i className='fas fa-chart-pie fa-4x'></i>
          <h3>Analytics</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, voluptate!
          </p>
        </div>
        <div className='box'>
          <i className='fas fa-cog fa-4x'></i>
          <h3>Development</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, voluptate!
          </p>
        </div>
        <div className='box'>
          <i className='fas fa-globe fa-4x'></i>
          <h3>Marketing</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, voluptate!
          </p>
        </div>
        <div className='box'>
          <i className='fas fa-users fa-4x'></i>
          <h3>Support</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, voluptate!
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;
