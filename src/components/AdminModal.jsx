import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  X, 
  LogOut, 
  AlertCircle,
  TrendingUp,
  ShoppingBag,
  Bell,
  Link as LinkIcon,
  Check,
  Tag,
  RotateCcw,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { usePrice } from '../context/PriceContext';

const AdminModal = ({ isOpen, onClose }) => {
  const { 
    currentPrice, 
    originalPrice, 
    purchaseUrl, 
    notificationsActive, 
    discountPercentage, 
    updateAllSettings, 
    resetAllSettings 
  } = usePrice();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Form State for editing
  const [editPrice, setEditPrice] = useState(currentPrice);
  const [editOriginal, setEditOriginal] = useState(originalPrice);
  const [editLink, setEditLink] = useState(purchaseUrl);
  const [editNotifications, setEditNotifications] = useState(notificationsActive);
  
  // Live update confirmation feedback
  const [liveSuccessMessage, setLiveSuccessMessage] = useState('');

  // Keep local form in sync when modal opens
  useEffect(() => {
    if (isOpen) {
      setEditPrice(currentPrice);
      setEditOriginal(originalPrice);
      setEditLink(purchaseUrl);
      setEditNotifications(notificationsActive);
      setLiveSuccessMessage('');
    }
  }, [isOpen, currentPrice, originalPrice, purchaseUrl, notificationsActive]);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const validEmail = email.trim().toLowerCase() === 'rbind3512@gmail.com';
      const validPass = password === 'Alpzazzaz';

      if (validEmail && validPass) {
        setIsLoggedIn(true);
        setError('');
      } else {
        setError('Invalid admin email or password. Please try again.');
      }
      setIsLoading(false);
    }, 600);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setError('');
    setLiveSuccessMessage('');
  };

  // THE MASTER "UPDATE LIVE" HANDLER
  const handleUpdateAllLive = (e) => {
    if (e) e.preventDefault();
    
    updateAllSettings({
      price: editPrice,
      original: editOriginal,
      url: editLink,
      notifications: editNotifications
    });

    setLiveSuccessMessage('🎉 All changes are now LIVE across the website! Payment link & pricing updated everywhere.');
    setTimeout(() => {
      setLiveSuccessMessage('');
    }, 5000);
  };

  const handlePresetPrice = (preset) => {
    setEditPrice(preset);
  };

  const handleResetToDefaults = () => {
    resetAllSettings();
    setEditPrice('150');
    setEditOriginal('799');
    setEditLink(purchaseUrl);
    setEditNotifications(true);
    setLiveSuccessMessage('✓ All settings reset to default factory values.');
    setTimeout(() => setLiveSuccessMessage(''), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-gray-100 overflow-hidden relative animate-scale-up max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors z-20"
        >
          <X size={18} />
        </button>

        {!isLoggedIn ? (
          /* LOGIN FORM */
          <div className="p-8 sm:p-10 overflow-y-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-navy-900 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900">Admin Portal</h3>
              <p className="text-sm text-gray-500 mt-1">
                Enter your credentials to manage study bundle link & pricing
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs flex items-center gap-2">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Email or Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input 
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@studysphere.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-11 py-3 rounded-xl border border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-sm text-gray-900 placeholder-gray-400 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                  <input type="checkbox" defaultChecked className="rounded text-brand-primary focus:ring-brand-primary/20" />
                  <span>Remember session</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 bg-navy-900 hover:bg-navy-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Lock size={16} /> Sign In to Dashboard
                  </>
                )}
              </button>
            </form>

          </div>
        ) : (
          /* LOGGED IN ADMIN DASHBOARD */
          <div className="p-6 sm:p-7 overflow-y-auto flex-1 flex flex-col justify-between">
            <div>
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-navy-900 text-base leading-tight">Admin Live Console</h4>
                    <p className="text-xs text-green-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Logged in: rbind3512@gmail.com
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs text-red-600 hover:text-red-700 font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-50 transition-colors"
                >
                  <LogOut size={14} /> Logout
                </button>
              </div>

              {/* Live Success Banner */}
              {liveSuccessMessage && (
                <div className="mb-5 p-4 bg-emerald-500 text-white rounded-2xl shadow-lg flex items-start gap-3 animate-fade-in">
                  <div className="bg-white/20 p-1.5 rounded-full mt-0.5">
                    <Check size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm font-extrabold leading-snug">
                      {liveSuccessMessage}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[11px] text-emerald-100">
                      <span>Live Price: <strong>₹{currentPrice}</strong></span>
                      <span>•</span>
                      <a 
                        href={purchaseUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline hover:text-white flex items-center gap-1 font-bold"
                      >
                        Test Active Link <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Stats Overview */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-1 font-semibold">
                    <ShoppingBag size={14} className="text-brand-primary" /> Total Aspirants
                  </div>
                  <div className="text-2xl font-black text-navy-900">7,548+</div>
                  <div className="text-[11px] text-green-600 mt-0.5 font-medium flex items-center gap-1">
                    <TrendingUp size={12} /> +124 today
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-1 font-semibold">
                    <TrendingUp size={14} className="text-blue-500" /> Current Live Price
                  </div>
                  <div className="text-2xl font-black text-navy-900">₹{currentPrice}</div>
                  <div className="text-[11px] text-gray-500 mt-0.5">
                    <span className="line-through">₹{originalPrice}</span> ({discountPercentage}% OFF)
                  </div>
                </div>
              </div>

              {/* Live Store Settings Form */}
              <div className="space-y-4 mb-6">
                
                {/* 1. Payment Link Editor */}
                <div className="bg-blue-50/50 border border-blue-200/80 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-navy-900 flex items-center gap-1.5">
                      <LinkIcon size={14} className="text-blue-600" /> Active Purchase / Payment URL
                    </label>
                    <a
                      href={purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1"
                      title="Test current live link"
                    >
                      Test Current Link <ExternalLink size={11} />
                    </a>
                  </div>
                  <p className="text-[11px] text-gray-500 mb-2">
                    All "BUY NOW" & "Download" buttons on the landing page will redirect to this link:
                  </p>
                  <div className="relative">
                    <input
                      type="url"
                      required
                      value={editLink}
                      onChange={(e) => setEditLink(e.target.value)}
                      placeholder="https://..."
                      className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-2.5 text-xs font-mono text-gray-800 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                    />
                  </div>
                </div>

                {/* 2. Price Editor */}
                <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-navy-900 flex items-center gap-1.5">
                      <Tag size={14} className="text-amber-600" /> Bundle Pricing (Site-wide)
                    </label>
                    <span className="text-[11px] font-semibold text-gray-400">
                      Auto-updates all 7 sections
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div>
                      <span className="text-[11px] text-gray-600 font-medium block mb-1">Selling Price (₹)</span>
                      <div className="relative">
                        <span className="absolute left-2.5 top-2 text-xs font-bold text-gray-500">₹</span>
                        <input
                          type="number"
                          min="1"
                          max="99999"
                          value={editPrice}
                          onChange={(e) => setEditPrice(e.target.value)}
                          className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-300 rounded-xl text-xs font-bold text-navy-900 outline-none focus:border-brand-primary"
                          placeholder="150"
                        />
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] text-gray-600 font-medium block mb-1">Strikethrough Price (₹)</span>
                      <div className="relative">
                        <span className="absolute left-2.5 top-2 text-xs font-bold text-gray-500">₹</span>
                        <input
                          type="text"
                          value={editOriginal}
                          onChange={(e) => setEditOriginal(e.target.value)}
                          className="w-full pl-6 pr-2 py-1.5 bg-white border border-gray-300 rounded-xl text-xs text-gray-700 outline-none focus:border-brand-primary"
                          placeholder="799"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preset Quick Price Buttons */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1.5">Quick Price Presets:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['49', '99', '149', '150', '199', '299'].map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => handlePresetPrice(p)}
                          className={`text-xs px-2.5 py-1 rounded-lg border font-bold transition-all ${
                            String(editPrice) === p 
                              ? 'bg-brand-primary text-navy-900 border-brand-primary shadow-sm ring-1 ring-brand-primary' 
                              : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          ₹{p}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Toggle Live Purchase Notifications */}
                <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Bell size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-navy-900">Live Purchase Popups</p>
                      <p className="text-[11px] text-gray-500">Show recent purchase alerts on bottom left</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEditNotifications(!editNotifications)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                      editNotifications ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
                  </button>
                </div>
              </div>

              {/* THE MASTER UPDATE BUTTON */}
              <div className="bg-gradient-to-r from-amber-500 via-brand-primary to-yellow-400 p-0.5 rounded-2xl shadow-lg mb-4">
                <button
                  type="button"
                  onClick={handleUpdateAllLive}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-sm py-4 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 group hover:scale-[1.01]"
                >
                  <Sparkles size={18} className="text-brand-primary group-hover:rotate-12 transition-transform" />
                  <span>UPDATE ALL CHANGES LIVE</span>
                  <span className="bg-brand-primary text-navy-900 text-[10px] font-black uppercase px-2 py-0.5 rounded-full ml-1">
                    PUBLISH NOW
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 mb-2 px-1">
                <button
                  type="button"
                  onClick={handleResetToDefaults}
                  className="hover:text-gray-600 flex items-center gap-1 transition-colors"
                >
                  <RotateCcw size={12} /> Reset to Original Defaults
                </button>
                <span>Changes persist across browser refreshes</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-400">StudySphere Control Panel</span>
              <button
                onClick={onClose}
                className="bg-gray-100 hover:bg-gray-200 text-navy-900 text-xs font-bold px-5 py-2 rounded-xl transition-colors"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminModal;
