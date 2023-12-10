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

      {/* Content of the Home component */}
      <h1>Hallo dari Halaman Home!</h1>
    </div>
  );
};

export default Home;
