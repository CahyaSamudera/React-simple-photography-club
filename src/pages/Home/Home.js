import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Service/Service';
import Info from '../../components/Info/Info';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <Hero />
      <Service />
      <Info />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
