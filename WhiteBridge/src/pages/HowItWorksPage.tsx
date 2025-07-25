import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Phone, FileText, DollarSign, Shield } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

const HowItWorksPage = () => {
  const detailedSteps = [
    {
      number: "01",
      title: "Fill Out Our Simple Form",
      description: "Tell us about yourself and your case. It takes less than 5 minutes. No long forms or hard questions.",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      details: [
        "Your name and phone number",
        "What kind of case you have",
        "Your lawyer's name",
        "That's it - we do the rest"
      ]
    },
    {
      number: "02", 
      title: "We Talk to Your Lawyer",
      description: "We call your lawyer to learn about your case. This helps us decide how much money we can give you.",
      icon: <Phone className="h-8 w-8 text-green-500" />,
      details: [
        "We call your lawyer fast",
        "We ask about your case", 
        "We see if your case is strong",
        "We figure out how much to offer you"
      ]
    },
    {
      number: "03",
      title: "We Make You an Offer",
      description: "If your case looks good, we call you with an offer. Most people get approved the same day.",
      icon: <CheckCircle className="h-8 w-8 text-orange-500" />,
      details: [
        "We call you with good news",
        "We explain everything clearly",
        "No tricks or hidden costs",
        "You can get up to $100,000"
      ]
    },
    {
      number: "04",
      title: "Get Your Money Fast", 
      description: "We put money in your bank account in 1-2 days. Sometimes the same day if you need it urgently.",
      icon: <DollarSign className="h-8 w-8 text-purple-500" />,
      details: [
        "Money goes right to your bank",
        "Fast wire transfers",
        "Same day if you really need it",
        "Safe and private"
      ]
    },
    {
      number: "05",
      title: "Pay Us Only If You Win",
      description: "This is the best part - you only pay us if you win your case. If you lose, you owe us nothing at all.",
      icon: <Shield className="h-8 w-8 text-teal-500" />,
      details: [
        "Zero risk for you",
        "No monthly bills to pay",
        "Won't hurt your credit",
        "Sleep better at night"
      ]
    }
  ];

  const requirements = [
    "You have a legal case going on",
    "You have a lawyer helping you", 
    "Your case has a good chance of winning",
    "You are 18 years old or older"
  ];

  const benefits = [
    {
      title: "No Credit Check",
      description: "Your credit history doesn't matter. We base funding on your case, not your credit score."
    },
    {
      title: "No Monthly Payments", 
      description: "Unlike loans, you don't make monthly payments. You only pay when your case settles."
    },
    {
      title: "Risk-Free",
      description: "If you lose your case, you don't owe us anything. All the risk is on us."
    },
    {
      title: "Fast Process",
      description: "Most clients get their money within 24-48 hours of approval."
    },
    {
      title: "Use Money for Anything",
      description: "Pay bills, rent, medical expenses, or anything else you need while waiting for your case."
    },
    {
      title: "Work with Your Attorney",
      description: "We coordinate directly with your lawyer, so you don't have to manage the process."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Help You Get Money Fast
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting money is easy and safe. We help thousands of people every year. 
              Here's how we can help you too.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {detailedSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                      {step.number}
                    </div>
                    <div className="p-3 bg-gray-100 rounded-lg">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 max-w-md">
                  <div className="bg-gray-100 rounded-xl p-8 text-center">
                    <Clock className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Step {step.number} typically takes {
                        index === 0 ? '5 minutes' :
                        index === 1 ? '1-2 hours' : 
                        index === 2 ? '2-4 hours' :
                        index === 3 ? '24-48 hours' : 'the lifetime of your case'
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Do You Qualify?
            </h2>
            <p className="text-xl text-gray-600">
              To qualify for legal funding, you need to meet these simple requirements:
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-6">
                If you meet these requirements, you're likely eligible for funding.
              </p>
              <Link
                to="/apply"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
              >
                Check If You Qualify
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Legal Funding Makes Sense
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Legal funding is different from traditional loans. Here are the key benefits:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Apply now and get the money you need in as little as 24 hours.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <ApplicationForm 
              title="Apply for Legal Funding"
              subtitle="Get up to $100,000 in 24-48 hours"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our team is here to help. Call us now to speak with a funding specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8885550123"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
            >
              Call (888) 555-0123
            </a>
            <Link
              to="/faq"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;