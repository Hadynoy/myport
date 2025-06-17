import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PreLoad from './components/PreLoad';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use both a timeout and image preload as fallback
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // fallback after 3s in case image fails

    const img = new Image();
    img.src = '/assets/3.avif'; // replace with your actual hero image
    img.onload = () => {
      clearTimeout(timeout);
      setIsLoading(false);
    };

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading && <PreLoad />}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Services />
        <Banner />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
