import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import BundleGrid from './components/BundleGrid';

import AudienceSection from './components/AudienceSection';
import WhySmartNotes from './components/WhySmartNotes';
import Pricing from './components/Pricing';
import FreeSample from './components/FreeSample';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans selection:bg-brand-primary selection:text-navy-900 pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <TrustStrip />
      <BundleGrid />

      <AudienceSection />
      <WhySmartNotes />
      <Pricing />
      <FreeSample />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
