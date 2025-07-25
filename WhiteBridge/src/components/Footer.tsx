import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8" />
              <span className="text-xl font-bold">WhiteBridge Legal Funding</span>
            </div>
            <p className="text-blue-100 mb-4 max-w-md">
              We help people get the money they need while waiting for their legal case to settle. 
              No credit checks, low flat fees, and you only pay if you win.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">(888) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">info@whitebridgelegal.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span className="text-blue-100">123 Legal Plaza, Suite 456, Los Angeles, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="text-blue-100 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/cases-we-fund" className="text-blue-100 hover:text-white transition-colors">Cases We Fund</Link></li>
              <li><Link to="/faq" className="text-blue-100 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/apply" className="text-blue-100 hover:text-white transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Disclaimers</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">State Licenses</a></li>
              <li><Link to="/resources" className="text-blue-100 hover:text-white transition-colors">Resources</Link></li>
            </ul>
            <div className="mt-6">
              <div className="bg-blue-800 rounded-lg p-3">
                <p className="text-sm text-blue-100 font-semibold">✓ Serving clients in all 50 states</p>
                <p className="text-sm text-blue-100 mt-1">✓ Licensed in California</p>
                <p className="text-sm text-blue-100 mt-1">✓ BBB A+ Rating</p>
                <p className="text-sm text-blue-100 mt-1">✓ SSL Encrypted & Secure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2025 WhiteBridge Legal Funding. All rights reserved.
            </p>
            <p className="text-blue-200 text-sm text-center md:text-right max-w-md">
              <strong>Important:</strong> WhiteBridge is not a law firm. We offer pre-settlement legal funding, not loans. 
              You only repay if your case wins. Not available in all states. Always talk to your lawyer about your case.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;