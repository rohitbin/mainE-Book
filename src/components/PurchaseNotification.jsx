import React, { useState, useEffect } from 'react';
import { recentPurchases } from '../data/purchases';
import { CheckCircle2, X } from 'lucide-react';
import { usePrice } from '../context/PriceContext';

const PurchaseNotification = () => {
  const { notificationsActive } = usePrice();
  const [currentPurchase, setCurrentPurchase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!notificationsActive) return;
    let hideTimer;
    let intervalTimer;
    
    // Function to show a new notification
    const products = [
      '500+ Books PDFs Mega Bundle',
      '500+ Books PDFs Mega Bundle',
      'Indian Geography PYQ Book',
      '500+ Books PDFs Mega Bundle',
      'Indian History PYQ Book'
    ];

    const showNextNotification = () => {
      const randomIndex = Math.floor(Math.random() * recentPurchases.length);
      const chosenProduct = products[Math.floor(Math.random() * products.length)];
      setCurrentPurchase({ ...recentPurchases[randomIndex], product: chosenProduct });
      setIsVisible(true);
      
      // Hide after 4 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Initial delay before first notification
    const initialTimer = setTimeout(() => {
      showNextNotification();
      
      // Set interval for subsequent notifications (every 8 to 15 seconds)
      intervalTimer = setInterval(() => {
        showNextNotification();
      }, Math.floor(Math.random() * 7000) + 8000);
      
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(intervalTimer);
    };
  }, [notificationsActive]);

  if (!notificationsActive || !currentPurchase) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl p-4 flex items-start gap-4 border border-gray-100 max-w-[320px] relative overflow-hidden">
        <div className="bg-green-100 text-green-600 p-2 rounded-full flex-shrink-0">
          <CheckCircle2 size={24} />
        </div>
        
        <div className="flex-1 pr-4">
          <p className="text-xs text-gray-500 mb-0.5">Verified Purchase</p>
          <p className="font-bold text-navy-900 text-sm">
            {currentPurchase.name} <span className="text-gray-500 font-normal">from {currentPurchase.state}</span>
          </p>
          <p className="text-xs text-brand-primary font-bold mt-1">
            Just bought {currentPurchase.product || '500+ Books PDFs Mega Bundle'}
          </p>
        </div>

        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default PurchaseNotification;
