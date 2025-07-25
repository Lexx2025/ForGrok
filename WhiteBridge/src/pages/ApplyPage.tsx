import React from 'react';
import { CheckCircle, Clock, Shield, Star } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

const ApplyPage = () => {
  const benefits = [
    "Get up to $100,000 in 24-48 hours",
    "No credit check required",  
    "No monthly payments",
    "Only pay if you win your case",
    "Use money for anything you need",
    "Work directly with your attorney"
  ];

  const process = [
    "Fill out the simple form below",
    "We contact your attorney within 1 hour", 
    "Get approved in 2-4 hours",
    "Receive money in your bank account"
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      case: "Car Accident", 
      quote: "I got $15,000 the next day. It saved my family from losing our home.",
      rating: 5,
      amount: "$15,000",
      time: "24 hours"
    },
    {
      name: "James Thompson",
      case: "Workers Comp",
      quote: "The whole process was so easy. No paperwork hassles at all.",
      rating: 5,
      amount: "$8,500", 
      time: "Same day"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Apply for Legal Funding
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the money you need in 24-48 hours. No credit check, no monthly payments, 
              and you only pay if you win your case.
            </p>
          </div>
        </div>
      </section>

      {/* Main Application Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <div>
              <ApplicationForm 
                title="Get Your Money Fast"
                subtitle="Complete this form to get started. Takes less than 5 minutes."
              />
            </div>

            {/* Benefits and Process */}
            <div className="space-y-8">
              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Choose WhiteBridge?
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How It Works
                </h3>
                <div className="space-y-4">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">100% Secure</div>
                  </div>
                  <div>
                    <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">24-48 Hours</div>
                  </div>
                  <div>
                    <CheckCircle className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900">Risk-Free</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real People, Real Results
            </h2>
            <p className="text-xl text-gray-600">
              See how we've helped people just like you get the money they needed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-lg">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-600">{testimonial.case}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{testimonial.amount}</p>
                      <p className="text-sm text-gray-500">in {testimonial.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick List */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you check my credit?
              </h3>
              <p className="text-gray-600">
                No, we don't check your credit. We base funding on your case, not your credit score.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I lose my case?
              </h3>
              <p className="text-gray-600">
                If you lose, you owe us nothing. This is completely risk-free for you.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How fast can I get money?
              </h3>
              <p className="text-gray-600">
                Most clients get their money within 24-48 hours after approval.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need a lawyer?
              </h3>
              <p className="text-gray-600">
                Yes, you must have an attorney representing you. We work directly with your lawyer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Push */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Don't Wait Any Longer
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Every day you wait is another day without the money you need. 
            Apply now and get your cash in 24-48 hours.
          </p>
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-orange-400">✓</div>
                <div className="text-blue-100">No Risk to You</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">⚡</div>
                <div className="text-blue-100">Fast Approval</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">💰</div>
                <div className="text-blue-100">Get Cash Fast</div>
              </div>
            </div>
          </div>
          <a
            href="tel:8885550123"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
          >
            Call (888) 555-0123 Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;