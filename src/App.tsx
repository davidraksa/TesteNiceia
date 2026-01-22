import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Audience } from './components/Audience';
import { Bio } from './components/Bio';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    // Background updated to the requested #F0E6E0
    // Text color updated to a deep brown #3E2C22
    <div className="min-h-screen font-sans text-[#3E2C22] bg-[#F0E6E0] selection:bg-[#F3DBB2] selection:text-[#3E2C22]">
      <Hero />
      <PainPoints />
      <Solution />
      <Audience />
      <Testimonials />
      <Bio />
      <FAQ />
      <Footer />
    </div>
  );
}
