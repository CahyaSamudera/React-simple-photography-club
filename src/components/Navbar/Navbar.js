import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='main-nav'>
        <ul>
          <li>
            <a href='#hero'>Beranda</a>
          </li>
          <li>
            <a href='#services'>Layanan</a>
          </li>
          <li>
            <a href='#gallery'>Gallery</a>
          </li>
          <li>
            <a href='#contact'>Kontak</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
