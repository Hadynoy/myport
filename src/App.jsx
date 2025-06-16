import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Services from './components/Services'
import Banner from './components/Banner'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <Services/>
      <Banner/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
