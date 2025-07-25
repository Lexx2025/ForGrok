import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Scale, CheckCircle, Phone } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

const IllinoisPage = () => {
  const illinoisFacts = [
    "Illinois allows legal funding for personal injury cases",
    "Strong consumer protection laws in Illinois", 
    "Licensed legal funding companies operate in Illinois",
    "Clear regulations protect legal funding clients"
  ];

  const commonCases = [
    "Car accidents on Illinois roads and highways",
    "Workers compensation injuries",
    "Slip and fall accidents in businesses",
    "Medical malpractice cases",
    "Construction and workplace accidents"
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-lg font-semibold text-gray-600">Illinois</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Legal Funding in Illinois
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the money you need for your Illinois legal case. Fast, safe, and licensed in Illinois.
              No credit check, no risk to you.
            </p>
          </div>
        </div>
      </section>

      {/* Illinois Specific Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Legal Funding Laws in Illinois
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Illinois has strong laws that protect people who need legal funding. 
                We follow all Illinois rules to keep you safe and help you get money when you need it.
              </p>
              <ul className="space-y-3">
                {illinoisFacts.map((fact, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{fact}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Licensed in Illinois:</strong> WhiteBridge follows all Illinois state laws and regulations 
                  for legal funding. We're here to help Illinois residents safely and legally.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Illinois Cases We Fund
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We help people with many types of cases in Illinois:
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
                  <strong>Illinois Advantage:</strong> Illinois has clear regulations that protect legal funding clients, 
                  giving you extra peace of mind when working with licensed companies.
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
              Apply for Illinois Legal Funding
            </h2>
            <p className="text-xl text-gray-600">
              Get money for your Illinois case in as little as 24 hours.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <ApplicationForm 
              title="Get Money for Your Illinois Case"
              subtitle="Licensed in Illinois. Takes <1 minute. No credit check."
            />
          </div>
        </div>
      </section>

      {/* Illinois Stats */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Illinois Legal Funding Facts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-900 mb-2">800+</div>
              <div className="text-gray-700 font-semibold">Illinois Clients Helped</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">$4M+</div>
              <div className="text-gray-700 font-semibold">Funded in Illinois</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">Licensed</div>
              <div className="text-gray-700 font-semibold">Illinois State Licensed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Money for Your Illinois Case?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call our Illinois legal funding specialists now. We're here to help Illinois residents get the money they need.
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

export default IllinoisPage;