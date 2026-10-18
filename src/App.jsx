import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import BundleGrid from './components/BundleGrid';
import AudienceSection from './components/AudienceSection';
import WhySmartNotes from './components/WhySmartNotes';
import FAQ from './components/FAQ';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';
import PurchaseNotification from './components/PurchaseNotification';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans selection:bg-brand-primary selection:text-navy-900 pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <TrustStrip />
      <BundleGrid />
      <AudienceSection />
      <WhySmartNotes />
      <FAQ />
      <Footer />
      <StickyCTA />
      <PurchaseNotification />
    </div>
  );
}

export default App;
