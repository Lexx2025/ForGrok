import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Scale, CheckCircle, Phone } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

const GeorgiaPage = () => {
  const georgiaFacts = [
    "Georgia allows legal funding for personal injury cases",
    "Consumer protection laws in Georgia", 
    "Licensed legal funding companies operate in Georgia",
    "Regulated industry with client protections"
  ];

  const commonCases = [
    "Car accidents on Georgia roads and highways",
    "Truck accidents (common on Georgia interstates)",
    "Slip and fall accidents in businesses",
    "Workers compensation injuries",
    "Medical malpractice cases"
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-lg font-semibold text-gray-600">Georgia</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Legal Funding in Georgia
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the money you need for your Georgia legal case. Fast, safe, and licensed in Georgia.
              No credit check, no risk to you.
            </p>
          </div>
        </div>
      </section>

      {/* Georgia Specific Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Legal Funding Laws in Georgia
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Georgia has laws that protect people who need legal funding. 
                We follow all Georgia rules to keep you safe and help you get money quickly.
              </p>
              <ul className="space-y-3">
                {georgiaFacts.map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{fact}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Licensed in Georgia:</strong> WhiteBridge follows all Georgia state laws and regulations 
                  for legal funding. We're here to help Georgia residents get money safely.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Georgia Cases We Fund
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We help people with many types of cases in Georgia:
              </p>
              <ul className="space-y-3">
                {commonCases.map((caseType, index) => (
                  <li key={index} className="flex items-start">
                    <Scale className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{caseType}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Georgia Advantage:</strong> Georgia's regulated legal funding industry means you get 
                  protection and peace of mind when working with licensed companies like WhiteBridge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apply for Georgia Legal Funding
            </h2>
            <p className="text-xl text-gray-600">
              Get money for your Georgia case in as little as 24 hours.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <ApplicationForm 
              title="Get Money for Your Georgia Case"
              subtitle="Licensed in Georgia. Takes <1 minute. No credit check."
            />
          </div>
        </div>
      </section>

      {/* Georgia Stats */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Georgia Legal Funding Facts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-900 mb-2">600+</div>
              <div className="text-gray-700 font-semibold">Georgia Clients Helped</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">$3M+</div>
              <div className="text-gray-700 font-semibold">Funded in Georgia</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">Licensed</div>
              <div className="text-gray-700 font-semibold">Georgia State Licensed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Money for Your Georgia Case?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call our Georgia legal funding specialists now. We're here to help Georgia residents get money fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8885550123"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call (888) 555-0123</span>
            </a>
            <Link
              to="/apply"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
            >
              Apply Online Now
            </Link>
          </div>
          <div className="mt-6 text-sm text-blue-200">
            <p>Not available in all states. This is non-recourse legal funding. Not a loan.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeorgiaPage;