import React, { createContext, useContext, useState } from 'react';
import { HISTORY_PURCHASE_URL, GEOGRAPHY_PURCHASE_URL } from '../data/constants';

const StoreContext = createContext();

export const PriceProvider = ({ children }) => {
  // History Book State
  const [currentPrice, setCurrentPrice] = useState(() => {
    const saved = localStorage.getItem('studySphere_price');
    if (!saved || saved === '75' || saved === '150') {
      return '85';
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
      return HISTORY_PURCHASE_URL;
    }
    return saved;
  });

  // Geography Book State
  const [geographyPrice, setGeographyPrice] = useState(() => {
    const saved = localStorage.getItem('studySphere_geo_price');
    return saved || '85';
  });

  const [geographyOriginalPrice, setGeographyOriginalPrice] = useState(() => {
    const saved = localStorage.getItem('studySphere_geo_original_price');
    return saved || '799';
  });

  const [geographyPurchaseUrl, setGeographyPurchaseUrl] = useState(() => {
    const saved = localStorage.getItem('studySphere_geo_purchase_url');
    if (!saved || saved.includes('indian-geography-pyq-book')) {
      return GEOGRAPHY_PURCHASE_URL;
    }
    return saved;
  });

  const [notificationsActive, setNotificationsActive] = useState(() => {
    const saved = localStorage.getItem('studySphere_notifications_active');
    return saved !== null ? saved === 'true' : true;
  });

  // Bulk update function that publishes all changes live and persists to localStorage
  const updateAllSettings = ({ 
    price, 
    original, 
    url, 
    geoPrice, 
    geoOriginal, 
    geoUrl, 
    notifications 
  }) => {
    if (price !== undefined) {
      const cleanPrice = String(price).replace(/[^0-9]/g, '');
      if (cleanPrice) {
        setCurrentPrice(cleanPrice);
        localStorage.setItem('studySphere_price', cleanPrice);
      }
    }

    if (original !== undefined) {
      const cleanOriginal = String(original).replace(/[^0-9]/g, '') || '799';
      const formatted = Number(cleanOriginal).toLocaleString('en-IN');
      setOriginalPrice(formatted);
      localStorage.setItem('studySphere_original_price', formatted);
    }

    if (url !== undefined && url.trim()) {
      const cleanUrl = url.trim();
      setPurchaseUrl(cleanUrl);
      localStorage.setItem('studySphere_purchase_url', cleanUrl);
    }

    if (geoPrice !== undefined) {
      const cleanGeoPrice = String(geoPrice).replace(/[^0-9]/g, '');
      if (cleanGeoPrice) {
        setGeographyPrice(cleanGeoPrice);
        localStorage.setItem('studySphere_geo_price', cleanGeoPrice);
      }
    }

    if (geoOriginal !== undefined) {
      const cleanGeoOriginal = String(geoOriginal).replace(/[^0-9]/g, '') || '799';
      const formatted = Number(cleanGeoOriginal).toLocaleString('en-IN');
      setGeographyOriginalPrice(formatted);
      localStorage.setItem('studySphere_geo_original_price', formatted);
    }

    if (geoUrl !== undefined && geoUrl.trim()) {
      const cleanGeoUrl = geoUrl.trim();
      setGeographyPurchaseUrl(cleanGeoUrl);
      localStorage.setItem('studySphere_geo_purchase_url', cleanGeoUrl);
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

  const updateGeographySettings = (newPrice, newOriginal, newUrl) => {
    updateAllSettings({ geoPrice: newPrice, geoOriginal: newOriginal, geoUrl: newUrl });
  };

  const updatePricing = (newPrice, newOriginal) => {
    updateAllSettings({ price: newPrice, original: newOriginal });
  };

  const resetAllSettings = () => {
    setCurrentPrice('85');
    setOriginalPrice('799');
    setPurchaseUrl(HISTORY_PURCHASE_URL);
    setGeographyPrice('85');
    setGeographyOriginalPrice('799');
    setGeographyPurchaseUrl(GEOGRAPHY_PURCHASE_URL);
    setNotificationsActive(true);
    localStorage.removeItem('studySphere_price');
    localStorage.removeItem('studySphere_original_price');
    localStorage.removeItem('studySphere_purchase_url');
    localStorage.removeItem('studySphere_geo_price');
    localStorage.removeItem('studySphere_geo_original_price');
    localStorage.removeItem('studySphere_geo_purchase_url');
    localStorage.removeItem('studySphere_notifications_active');
  };

  const numCurrent = parseInt(String(currentPrice).replace(/[^0-9]/g, ''), 10) || 85;
  const numOriginal = parseInt(String(originalPrice).replace(/[^0-9]/g, ''), 10) || 799;
  const discountPercentage = Math.max(0, Math.min(99, Math.round(((numOriginal - numCurrent) / numOriginal) * 100)));

  const numGeoCurrent = parseInt(String(geographyPrice).replace(/[^0-9]/g, ''), 10) || 85;
  const numGeoOriginal = parseInt(String(geographyOriginalPrice).replace(/[^0-9]/g, ''), 10) || 799;
  const geographyDiscountPercentage = Math.max(0, Math.min(99, Math.round(((numGeoOriginal - numGeoCurrent) / numGeoOriginal) * 100)));

  return (
    <StoreContext.Provider 
      value={{ 
        currentPrice, 
        originalPrice, 
        purchaseUrl,
        historyPrice: currentPrice,
        historyOriginalPrice: originalPrice,
        historyPurchaseUrl: purchaseUrl,
        historyDiscountPercentage: discountPercentage,
        geographyPrice,
        geographyOriginalPrice,
        geographyPurchaseUrl,
        geographyDiscountPercentage,
        notificationsActive,
        discountPercentage, 
        updateAllSettings,
        updatePurchaseUrl,
        updatePricing, 
        updateGeographySettings,
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
      currentPrice: '85',
      originalPrice: '799',
      purchaseUrl: HISTORY_PURCHASE_URL,
      historyPrice: '85',
      historyOriginalPrice: '799',
      historyPurchaseUrl: HISTORY_PURCHASE_URL,
      historyDiscountPercentage: 89,
      geographyPrice: '85',
      geographyOriginalPrice: '799',
      geographyPurchaseUrl: GEOGRAPHY_PURCHASE_URL,
      geographyDiscountPercentage: 89,
      notificationsActive: true,
      discountPercentage: 89,
      updateAllSettings: () => {},
      updatePurchaseUrl: () => {},
      updatePricing: () => {},
      updateGeographySettings: () => {},
      resetPricing: () => {},
      resetAllSettings: () => {}
    };
  }
  return context;
};

export const usePrice = useStore;
