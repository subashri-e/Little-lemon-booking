import React from 'react';
import Banner from './Banner';
import MenuSection from './MenuSection';
import BookingSection from './BookingSection';
import HoursSection from './HoursSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="content-sections">
        <MenuSection />
        <BookingSection />
        <HoursSection />
      </div>
    </div>
  );
}

export default Home;

