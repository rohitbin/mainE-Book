import React, { createContext, useContext, useState } from 'react';
import { 
  HISTORY_PURCHASE_URL, 
  GEOGRAPHY_PURCHASE_URL,
  BUNDLE_PURCHASE_URL,
  BUNDLE_PRICE,
  BUNDLE_ORIGINAL_PRICE 
} from '../data/constants';

const StoreContext = createContext();

export const PriceProvider = ({ children }) => {
  // 500+ Books Mega Bundle State (First Priority)
  const [bundlePrice, setBundlePrice] = useState(() => {
    const saved = localStorage.getItem('studySphere_bundle_price');
    if (!saved || saved === '149' || saved === '150') {
      return BUNDLE_PRICE;
    }
    return saved;
  });

  const [bundleOriginalPrice, setBundleOriginalPrice] = useState(() => {
    const saved = localStorage.getItem('studySphere_bundle_original_price');
    return saved || BUNDLE_ORIGINAL_PRICE;
  });

  const [bundlePurchaseUrl, setBundlePurchaseUrl] = useState(() => {
    const saved = localStorage.getItem('studySphere_bundle_purchase_url');
    if (!saved || saved.includes('k7Qa2wc') || saved.includes('mintlink.in') || saved.includes('nqvirwiygjzinjq1')) {
      return BUNDLE_PURCHASE_URL;
    }
    return saved;
  });

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
    if (!saved || saved.includes('nqvirwiygjzinjq1') || saved.includes('mintlink.in')) {
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
    if (!saved || saved.includes('indian-geography-pyq-book') || saved.includes('mintlink.in') || saved.includes('complete-geographic-master-book')) {
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
    bundleP,
    bundleOrig,
    bundleU,
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

    if (bundleP !== undefined) {
      const cleanBundlePrice = String(bundleP).replace(/[^0-9]/g, '');
      if (cleanBundlePrice) {
        setBundlePrice(cleanBundlePrice);
        localStorage.setItem('studySphere_bundle_price', cleanBundlePrice);
      }
    }

    if (bundleOrig !== undefined) {
      const cleanBundleOrig = String(bundleOrig).replace(/[^0-9]/g, '') || '2999';
      const formatted = Number(cleanBundleOrig).toLocaleString('en-IN');
      setBundleOriginalPrice(formatted);
      localStorage.setItem('studySphere_bundle_original_price', formatted);
    }

    if (bundleU !== undefined && bundleU.trim()) {
      const cleanBundleUrl = bundleU.trim();
      setBundlePurchaseUrl(cleanBundleUrl);
      localStorage.setItem('studySphere_bundle_purchase_url', cleanBundleUrl);
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

  const updateBundleSettings = (newPrice, newOriginal, newUrl) => {
    updateAllSettings({ bundleP: newPrice, bundleOrig: newOriginal, bundleU: newUrl });
  };

  const updatePricing = (newPrice, newOriginal) => {
    updateAllSettings({ price: newPrice, original: newOriginal });
  };

  const resetAllSettings = () => {
    setBundlePrice(BUNDLE_PRICE);
    setBundleOriginalPrice(BUNDLE_ORIGINAL_PRICE);
    setBundlePurchaseUrl(BUNDLE_PURCHASE_URL);
    setCurrentPrice('85');
    setOriginalPrice('799');
    setPurchaseUrl(HISTORY_PURCHASE_URL);
    setGeographyPrice('85');
    setGeographyOriginalPrice('799');
    setGeographyPurchaseUrl(GEOGRAPHY_PURCHASE_URL);
    setNotificationsActive(true);
    localStorage.removeItem('studySphere_bundle_price');
    localStorage.removeItem('studySphere_bundle_original_price');
    localStorage.removeItem('studySphere_bundle_purchase_url');
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

  const numBundleCurrent = parseInt(String(bundlePrice).replace(/[^0-9]/g, ''), 10) || 75;
  const numBundleOriginal = parseInt(String(bundleOriginalPrice).replace(/[^0-9]/g, ''), 10) || 2999;
  const bundleDiscountPercentage = Math.max(0, Math.min(99, Math.round(((numBundleOriginal - numBundleCurrent) / numBundleOriginal) * 100)));

  return (
    <StoreContext.Provider 
      value={{ 
        bundlePrice,
        bundleOriginalPrice,
        bundlePurchaseUrl,
        bundleDiscountPercentage,
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
        updateBundleSettings,
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
      bundlePrice: '75',
      bundleOriginalPrice: '2,999',
      bundlePurchaseUrl: BUNDLE_PURCHASE_URL,
      bundleDiscountPercentage: 97,
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
      updateBundleSettings: () => {},
      resetPricing: () => {},
      resetAllSettings: () => {}
    };
  }
  return context;
};

export const usePrice = useStore;
