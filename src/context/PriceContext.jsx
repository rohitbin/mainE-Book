import React, { createContext, useContext, useState } from 'react';
import { PURCHASE_URL } from '../data/constants';

const StoreContext = createContext();

export const PriceProvider = ({ children }) => {
  const [currentPrice, setCurrentPrice] = useState(() => {
    const saved = localStorage.getItem('studySphere_price');
    if (!saved || saved === '75') {
      return '150';
    }
    return saved;
  });

  const [originalPrice, setOriginalPrice] = useState(() => {
    const saved = localStorage.getItem('studySphere_original_price');
    if (!saved || saved === '2,999' || saved === '2999') {
      return '799';
    }
    return saved;
  });

  const [purchaseUrl, setPurchaseUrl] = useState(() => {
    const saved = localStorage.getItem('studySphere_purchase_url');
    if (!saved || saved.includes('nqvirwiygjzinjq1')) {
      return PURCHASE_URL;
    }
    return saved;
  });

  const [notificationsActive, setNotificationsActive] = useState(() => {
    const saved = localStorage.getItem('studySphere_notifications_active');
    return saved !== null ? saved === 'true' : true;
  });

  // Bulk update function that publishes all changes live and persists to localStorage
  const updateAllSettings = ({ price, original, url, notifications }) => {
    if (price !== undefined) {
      const cleanPrice = String(price).replace(/[^0-9]/g, '');
      if (cleanPrice) {
        setCurrentPrice(cleanPrice);
        localStorage.setItem('studySphere_price', cleanPrice);
      }
    }

    if (original !== undefined) {
      const cleanOriginal = String(original).replace(/[^0-9]/g, '') || '2999';
      const formatted = Number(cleanOriginal).toLocaleString('en-IN');
      setOriginalPrice(formatted);
      localStorage.setItem('studySphere_original_price', formatted);
    }

    if (url !== undefined && url.trim()) {
      const cleanUrl = url.trim();
      setPurchaseUrl(cleanUrl);
      localStorage.setItem('studySphere_purchase_url', cleanUrl);
    }

    if (notifications !== undefined) {
      setNotificationsActive(notifications);
      localStorage.setItem('studySphere_notifications_active', String(notifications));
    }
  };

  const updatePurchaseUrl = (newUrl) => {
    if (newUrl && newUrl.trim()) {
      const cleanUrl = newUrl.trim();
      setPurchaseUrl(cleanUrl);
      localStorage.setItem('studySphere_purchase_url', cleanUrl);
    }
  };

  const updatePricing = (newPrice, newOriginal) => {
    updateAllSettings({ price: newPrice, original: newOriginal });
  };

  const resetAllSettings = () => {
    setCurrentPrice('150');
    setOriginalPrice('799');
    setPurchaseUrl(PURCHASE_URL);
    setNotificationsActive(true);
    localStorage.removeItem('studySphere_price');
    localStorage.removeItem('studySphere_original_price');
    localStorage.removeItem('studySphere_purchase_url');
    localStorage.removeItem('studySphere_notifications_active');
  };

  const numCurrent = parseInt(String(currentPrice).replace(/[^0-9]/g, ''), 10) || 150;
  const numOriginal = parseInt(String(originalPrice).replace(/[^0-9]/g, ''), 10) || 2999;
  const discountPercentage = Math.max(0, Math.min(99, Math.round(((numOriginal - numCurrent) / numOriginal) * 100)));

  return (
    <StoreContext.Provider 
      value={{ 
        currentPrice, 
        originalPrice, 
        purchaseUrl,
        notificationsActive,
        discountPercentage, 
        updateAllSettings,
        updatePurchaseUrl,
        updatePricing, 
        resetPricing: resetAllSettings, 
        resetAllSettings,
        setNotificationsActive: (val) => {
          setNotificationsActive(val);
          localStorage.setItem('studySphere_notifications_active', String(val));
        }
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    return {
      currentPrice: '150',
      originalPrice: '2,999',
      purchaseUrl: PURCHASE_URL,
      notificationsActive: true,
      discountPercentage: 97,
      updateAllSettings: () => {},
      updatePurchaseUrl: () => {},
      updatePricing: () => {},
      resetPricing: () => {},
      resetAllSettings: () => {}
    };
  }
  return context;
};

export const usePrice = useStore;
