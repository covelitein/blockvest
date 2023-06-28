import React from 'react'
import { 
  About, 
  Bridge, 
  Contact, 
  CoolFacts, 
  Faq, 
  Features, 
  Footer, 
  Header, 
  Hero, 
  OurExperts, 
  PageScrollProgressBar, 
  Plans, 
  Services, 
  Testimonial 
} from '../components';



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