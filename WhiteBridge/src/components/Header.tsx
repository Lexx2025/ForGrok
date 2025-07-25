import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Cases We Fund', href: '/cases-we-fund' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 lg:h-10 lg:w-10 text-blue-900" />
            <span className="text-xl lg:text-2xl font-bold text-blue-900">
              WhiteBridge Legal Funding
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 hover:text-blue-900 transition-colors font-medium ${
                  location.pathname === item.href ? 'text-blue-900 border-b-2 border-blue-900' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              <MessageCircle className="h-4 w-4 mr-1" />
              Need Help?
            </div>
            <Link
              to="/apply"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get Money Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Need Help Button - Mobile */}
          <a
            href="tel:8885550123"
            className="lg:hidden ml-2 px-3 py-2 rounded-lg bg-green-100 text-green-800 hover:bg-green-200 font-semibold text-sm flex items-center space-x-1"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Help</span>
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col space-y-1 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 font-medium ${
                    location.pathname === item.href ? 'bg-blue-50 text-blue-900' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/apply"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-lg font-bold text-center transition-all duration-300"
              >
                Get Money Now — Free
              </Link>
              <a
                href="tel:8885550123"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call for Help Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;