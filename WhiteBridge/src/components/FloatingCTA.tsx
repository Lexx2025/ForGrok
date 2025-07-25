import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show on apply page
  if (location.pathname === '/apply') return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 md:hidden ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="bg-white border-t border-gray-200 p-4 shadow-2xl">
        <div className="flex space-x-3">
          <a
            href="tel:8885550123"
            className="flex-1 bg-blue-900 hover:bg-blue-800 text-white px-4 py-3 rounded-lg font-bold text-center transition-colors flex items-center justify-center space-x-2 min-h-[48px]"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
          <Link
            to="/apply"
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-lg font-bold text-center transition-all duration-300 min-h-[48px] flex items-center justify-center transform hover:scale-105"
          >
            Apply Now — Takes 1 Minute
          </Link>
        </div>
        <div className="text-center mt-2">
          <p className="text-xs text-gray-600">No credit check • No obligation • Money in 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;