import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';




function App() {
  return (
    <div>
      <Header />

      <Carousel />

      <About />

      <Services />

      <Carousel />

      <Portfolio />

      <Testimonial />
    
      <Footer />

    </div>
  );
}

export default App;
