import React from 'react';
import './App.css';
import Header from './Components/Header';
import Divider from './Components/Divider';
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

      <Divider />

      <About />

      <Divider />

      <Portfolio />

      <Divider />

      <Services />

      <Carousel />

      <Divider />

      <Testimonial />

      <Divider />
      
      <Footer />

    </div>
  );
}

export default App;
