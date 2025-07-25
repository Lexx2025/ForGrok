import React, { useState } from 'react';
import { Phone, Shield, Clock, CheckCircle } from 'lucide-react';

interface ApplicationFormProps {
  title?: string;
  subtitle?: string;
  showPhoneNumber?: boolean;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ 
  title = "Get Your Money Fast",
  subtitle = "Takes <1 minute. No credit check. No obligation.",
  showPhoneNumber = true 
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    caseType: '',
    state: '',
    caseValue: '',
    attorneyName: '',
    caseDescription: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send to webhook/Zapier
    fetch('https://hooks.zapier.com/hooks/catch/12345/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'whitebridge_website'
      }),
    }).catch(console.error);
    
    alert('Thank you! We will contact you within 1 hour to help you get the money you need.');
  };

  const caseTypes = [
    'Car Accident',
    'Slip and Fall',
    'Workers Compensation', 
    'Medical Malpractice',
    'Wrongful Death',
    'Personal Injury',
    'Other'
  ];

  const states = [
    'California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois', 'Ohio', 'Georgia',
    'North Carolina', 'Michigan', 'New Jersey', 'Virginia', 'Washington', 'Arizona', 'Massachusetts',
    'Tennessee', 'Indiana', 'Missouri', 'Maryland', 'Wisconsin', 'Colorado', 'Minnesota', 'South Carolina',
    'Alabama', 'Louisiana', 'Kentucky', 'Oregon', 'Oklahoma', 'Connecticut', 'Utah', 'Iowa', 'Nevada',
    'Arkansas', 'Mississippi', 'Kansas', 'New Mexico', 'Nebraska', 'West Virginia', 'Idaho', 'Hawaii',
    'New Hampshire', 'Maine', 'Montana', 'Rhode Island', 'Delaware', 'South Dakota', 'North Dakota',
    'Alaska', 'Vermont', 'Wyoming'
  ];

  const caseValues = [
    'Under $10,000',
    '$10,000 - $25,000', 
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'Not sure yet'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200">
      <div className="mb-6">
        <div className="text-center mb-4">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-3">
            <CheckCircle className="h-4 w-4 mr-2" />
            Free Application - No Obligation
          </div>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-center font-semibold text-lg">{subtitle}</p>
        
        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          <div className="flex flex-col items-center">
            <Shield className="h-6 w-6 text-green-500 mb-1" />
            <span className="text-xs text-gray-600 font-semibold">Secure</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-6 w-6 text-blue-500 mb-1" />
            <span className="text-xs text-gray-600 font-semibold">1 Minute</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle className="h-6 w-6 text-orange-500 mb-1" />
            <span className="text-xs text-gray-600 font-semibold">No Risk</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-base"
              placeholder="Your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-base"
              placeholder="Your last name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-base"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-base"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="caseType" className="block text-sm font-medium text-gray-700 mb-1">
            Type of Case *
          </label>
          <select
            id="caseType"
            required
            value={formData.caseType}
            onChange={(e) => setFormData({...formData, caseType: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-base"
          >
            <option value="">What kind of case do you have?</option>
            {caseTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            What State Are You In? *
          </label>
          <select
            id="state"
            required
            value={formData.state}
            onChange={(e) => setFormData({...formData, state: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-base"
          >
            <option value="">Select your state</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="caseValue" className="block text-sm font-medium text-gray-700 mb-1">
            Approximate Case Value
          </label>
          <select
            id="caseValue"
            value={formData.caseValue}
            onChange={(e) => setFormData({...formData, caseValue: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-base"
          >
            <option value="">How much do you think your case is worth?</option>
            {caseValues.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="attorneyName" className="block text-sm font-medium text-gray-700 mb-1">
            Attorney Name (Optional)
          </label>
          <input
            type="text"
            id="attorneyName"
            value={formData.attorneyName}
            onChange={(e) => setFormData({...formData, attorneyName: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-base"
            placeholder="Your lawyer's name or law firm"
          />
        </div>

        <div>
          <label htmlFor="caseDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Brief Case Description (Optional)
          </label>
          <textarea
            id="caseDescription"
            rows={3}
            value={formData.caseDescription}
            onChange={(e) => setFormData({...formData, caseDescription: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-base"
            placeholder="Tell us what happened in a few words..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px]"
        >
          Apply Now — Takes 1 Minute
        </button>
      </form>

      <div className="mt-4 text-center">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-600">
            <strong>Important:</strong> WhiteBridge is not a law firm. We offer pre-settlement legal funding, not a loan. 
            You only repay if your case wins. Not available in all states.
          </p>
        </div>
      </div>

      {showPhoneNumber && (
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-2 font-semibold">Need help? Call us right now:</p>
          <a
            href="tel:8885550123"
            className="inline-flex items-center space-x-2 text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
          >
            <Phone className="h-6 w-6" />
            <span>(888) 555-0123</span>
          </a>
          <div className="mt-4">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-sm text-blue-800 font-semibold">
                💬 U.S.-based team ready to help you get money fast!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;