import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='text-center'>
          <h4>Follow Us</h4>
          <div className='d-flex flex-row justify-content-center'>
            <span>
              <i className='fab fa-facebook'></i>
            </span>
            <span>
              <i className='fab fa-twitter'></i>
            </span>
            <span>
              <i className='fab fa-instagram'></i>
            </span>
            <span>
              <i className='fab fa-pinterest'></i>
            </span>
          </div>
          <p>&copy; Copyright 2021 | Photography Club</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
