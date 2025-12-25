import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GoTop from '../components/GoTop';
import AboutSection from '../components/Contact/AboutSection';
import MapSection from '../components/Contact/MapSection';
import '../App.css';
import '../Christmas.css';

function Contact() {
  return (
    <div className="index_all">
      <Navbar />
      <div className="container mt-5">
        <AboutSection />
        <MapSection />
      </div>
      <Footer />
      <GoTop />
    </div>
  );
}

export default Contact;