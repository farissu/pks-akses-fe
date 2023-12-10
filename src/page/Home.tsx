import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Layanan from '../components/Layanan';

const Home = () => {
  return (
    <div className="mx-auto min-h-screen shadow-lg max-w-md bg-white">
      <Navbar />
      <Banner />
      <Layanan />

    </div>
  );
};

export default Home;
