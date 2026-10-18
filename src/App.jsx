import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import BundleGrid from './components/BundleGrid';

import AudienceSection from './components/AudienceSection';
import WhySmartNotes from './components/WhySmartNotes';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';
import PurchaseNotification from './components/PurchaseNotification';
import AdminModal from './components/AdminModal';

function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8FA] font-sans selection:bg-brand-primary selection:text-navy-900 pb-16 md:pb-0">
      <Navbar onOpenAdmin={() => setIsAdminOpen(true)} />
      <Hero />
      <TrustStrip />
      <BundleGrid />

      <AudienceSection />
      <WhySmartNotes />
      <FAQ />
      <FinalCTA />
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
      <StickyCTA />
      <PurchaseNotification />

      <AdminModal 
        isOpen={isAdminOpen} 
        onClose={() => setIsAdminOpen(false)} 
      />
    </div>
  );
}

export default App;
