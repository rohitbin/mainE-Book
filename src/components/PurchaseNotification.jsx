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
      '500+ Books Bundle',
      '500+ Books Bundle',
      'Geography PYQ Book',
      '500+ Books Bundle',
      'History PYQ Book'
    ];

    const showNextNotification = () => {
      const randomIndex = Math.floor(Math.random() * recentPurchases.length);
      const chosenProduct = products[Math.floor(Math.random() * products.length)];
      setCurrentPurchase({ ...recentPurchases[randomIndex], product: chosenProduct });
      setIsVisible(true);
      
      // Hide after 3.5 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3500);
    };

    // Initial delay before first notification
    const initialTimer = setTimeout(() => {
      showNextNotification();
      
      // Set interval for subsequent notifications (every 9 to 16 seconds)
      intervalTimer = setInterval(() => {
        showNextNotification();
      }, Math.floor(Math.random() * 7000) + 9000);
      
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
      className={`fixed bottom-14 md:bottom-4 left-3 md:left-4 z-50 transition-all duration-300 transform pointer-events-none ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="pointer-events-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-2.5 py-2 flex items-center gap-2 border border-gray-200/90 max-w-[235px] sm:max-w-[255px] relative">
        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
          <CheckCircle2 size={13} className="text-emerald-600" />
        </div>
        
        <div className="flex-1 pr-3 min-w-0">
          <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold leading-none mb-0.5">Verified</p>
          <p className="font-bold text-gray-900 text-[11px] truncate leading-tight">
            {currentPurchase.name} <span className="text-gray-500 font-normal text-[10px]">({currentPurchase.state})</span>
          </p>
          <p className="text-[10px] text-amber-600 font-bold leading-tight mt-0.5 truncate">
            Bought {currentPurchase.product || '500+ Books Bundle'}
          </p>
        </div>

        <button 
          onClick={() => setIsVisible(false)} 
          className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close notification"
        >
          <X size={11} />
        </button>
      </div>
    </div>
  );
};

export default PurchaseNotification;
