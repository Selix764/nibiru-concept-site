import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Competitors/Competitors';
import Location from './components/Location/Location';
import Partners from './components/Partners/Partners';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Location />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
