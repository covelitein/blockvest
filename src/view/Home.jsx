import React from 'react'
import Hero from '../components/Hero'
import Features from "../components/Features";
import About from '../components/About';
import Services from '../components/Services';
import Plans from '../components/Plans';
import Bridge from '../components/Bridge';
import CoolFacts from '../components/CoolFacts';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import OurExperts from '../components/OurExperts';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PageScrollProgressBar from "../components/PageScrollProgressBar";


const Home = () => {
  return (
    <div className="">
      <Header />
      <PageScrollProgressBar />
      <Hero />
      <Features />
      <About />
      <Bridge />
      <Services />
      <CoolFacts />
      <Plans />
      <Testimonial />
      <OurExperts />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home
