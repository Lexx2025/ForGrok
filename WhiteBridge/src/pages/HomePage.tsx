import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Shield, DollarSign, Star, ChevronDown, ChevronUp, FileText, Scale, Phone, Award, Users, Heart, ArrowRight } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

const HomePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); // Show popup after 30 seconds

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 2) {
        setShowPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const trustBadges = [
    { text: "No Monthly Payments", icon: <CheckCircle className="h-4 w-4" /> },
    { text: "Only Pay If You Win", icon: <Shield className="h-4 w-4" /> },
    { text: "Not a Loan", icon: <DollarSign className="h-4 w-4" /> },
    { text: "Confidential & Secure", icon: <Shield className="h-4 w-4" /> },
    { text: "SSL Encrypted", icon: <Shield className="h-4 w-4" /> },
    { text: "Licensed in California", icon: <Award className="h-4 w-4" /> }
  ];

  const steps = [
    {
      number: "1",
      title: "Apply Online",
      description: "Fill out our simple form in under 1 minute",
      icon: <FileText className="h-8 w-8" />
    },
    {
      number: "2", 
      title: "We Review",
      description: "We check your case details quickly",
      icon: <CheckCircle className="h-8 w-8" />
    },
    {
      number: "3",
      title: "Get Approved",
      description: "Most people get approved same day",
      icon: <DollarSign className="h-8 w-8" />
    },
    {
      number: "4",
      title: "Get Money Fast",
      description: "Money in your account in 24-48 hours",
      icon: <Clock className="h-8 w-8" />
    },
    {
      number: "5",
      title: "Pay Only If You Win",
      description: "If you lose, you owe us nothing",
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-12 w-12 text-green-500" />,
      title: "Fast Decisions",
      description: "Get an answer in hours, not days. We work fast because you need money now."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "No Credit Checks",
      description: "Bad credit? No problem. We don't check your credit score or history."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-orange-500" />,
      title: "No Upfront Costs",
      description: "You pay nothing to apply. Low flat fees, no interest. No fees until your case wins."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-purple-500" />,
      title: "Pay Only If You Win",
      description: "If you lose your case, you owe us nothing. Zero risk to you."
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      case: "Car Accident",
      quote: "I got $5,000 in 48 hours for my car accident case to cover rent. It saved my family.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Thompson", 
      case: "Workers Comp",
      quote: "The process was so easy and fast. No paperwork hassles at all. They really helped me.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      case: "Slip and Fall", 
      quote: "They explained everything clearly. I felt comfortable the whole time. Great people.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const faqs = [
    {
      question: "How is this different than a loan?",
      answer: "This is not a loan at all. It's legal funding. You only pay us back if you win or settle your case. If you lose, you owe nothing. No monthly payments, no credit checks, no personal debt. We know times are tough - that's why we take all the risk."
    },
    {
      question: "How much does it cost?",
      answer: "We charge low flat fees with no compounding interest. The exact amount depends on your case, but we'll tell you everything upfront before you sign. No hidden costs or surprises. We know you're already dealing with enough stress."
    },
    {
      question: "What if I win less money than expected?",
      answer: "We only take what we agreed on, never more. If your case settles for less, you never owe us more than what we gave you. You'll never have personal debt to us. We're here to help, not hurt your situation."
    },
    {
      question: "Do I need a lawyer to apply?",
      answer: "Yes, you must have a lawyer representing you in your case. We work directly with your attorney to review your case and handle everything professionally. If you don't have a lawyer yet, we can help you find one."
    },
    {
      question: "Will this hurt my case?",
      answer: "No, getting money from us won't hurt your case at all. Your lawyer stays in complete control of your case. We just give you money while you wait. We coordinate directly with your attorney to keep everything smooth."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop&crop=center')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Trusted by thousands across America
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Legal Funding You Can Count On
                <span className="text-orange-500"> Fast & Safe</span>
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold text-blue-900 mb-4">
                No Credit Check. No Risk. Money in 24 Hours.
              </div>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Only pay if you win your case. Low flat fees, no interest. 
                Money in as little as 24 hours to help with bills while you wait.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                    <div className="text-green-500 mr-2">{badge.icon}</div>
                    <span className="text-xs font-semibold text-gray-700">{badge.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/apply"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center transform hover:scale-105"
                >
                  Get Money Now — It's Free to Apply
                </Link>
                <a
                  href="tel:8885550123"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg text-center flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call (888) 555-0123</span>
                </a>
              </div>
              
              <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4">
                <p><strong>Important:</strong> WhiteBridge is not a law firm. We offer pre-settlement legal funding, not a loan. You only repay if your case wins. Not available in all states.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-2">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center" 
                  alt="Happy person holding money after getting legal funding"
                  className="w-full h-64 lg:h-80 object-cover rounded-xl"
                />
              </div>
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Thousands Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Trusted by Thousands</h2>
            
            {/* Trust Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-blue-900 font-bold text-lg">Johnson & Associates</div>
                <div className="text-gray-600 text-sm">Law Firm</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-blue-900 font-bold text-lg">Legal News Today</div>
                <div className="text-gray-600 text-sm">Featured In</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-blue-900 font-bold text-lg">Better Business Bureau</div>
                <div className="text-gray-600 text-sm">A+ Rating</div>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-blue-900 font-bold text-lg">Medical Partners</div>
                <div className="text-gray-600 text-sm">Trusted Partner</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">10,000+</div>
                <div className="text-gray-600">Clients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$50M+</div>
                <div className="text-gray-600">Money Advanced</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24 Hours</div>
                <div className="text-gray-600">Average Payout</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">97%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Success Story */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Real People, Real Help</h2>
              <p className="text-xl text-gray-600">See how we helped Maria when she needed money most</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                  alt="Maria Rodriguez - satisfied client"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 mb-4 italic">
                  "I got $5,000 in 48 hours after my car accident to help cover rent. 
                  It saved my family from losing our home. The people at WhiteBridge 
                  were so kind and helpful during a really hard time."
                </blockquote>
                <div className="text-lg">
                  <div className="font-bold text-gray-900">Maria Rodriguez</div>
                  <div className="text-gray-600">Car Accident Case • Los Angeles, CA</div>
                  <div className="text-green-600 font-semibold mt-2">Got $5,000 in 48 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Help You Get Money - It's Really Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting money is easy and safe. Here's exactly how it works:
            </p>
          </div>
          <div className="relative">
            {/* Timeline line for desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-orange-200 to-green-200 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10 shadow-lg">
                    {step.number}
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl mx-auto mb-4 w-fit shadow-sm">
                    <div className="text-orange-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Why Choose WhiteBridge */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why People Choose WhiteBridge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make getting money simple, safe, and fast for people like you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney-Approved Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-800 rounded-full">
                <Scale className="h-12 w-12 text-orange-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Lawyers Love Working With WhiteBridge
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Attorneys love working with WhiteBridge because we don't interfere with your case. 
              We keep things simple for you and your legal team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">No Case Interference</h4>
                  <p className="text-blue-100 text-sm">Your lawyer stays in full control</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Simple Process</h4>
                  <p className="text-blue-100 text-sm">Easy paperwork and communication</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Fast Decisions</h4>
                  <p className="text-blue-100 text-sm">Quick reviews help your clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What People Say About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who got the help they needed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.case}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Questions People Ask Us
            </h2>
            <p className="text-xl text-gray-600">
              We know times are tough - here's how we help and what you need to know.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="text-blue-900 hover:text-blue-700 font-semibold text-lg"
            >
              See All Questions & Answers →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get the Money You Need?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Apply now and get cash in as little as 24 hours. No credit check, no risk to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Money Now - Apply Free
            </Link>
            <a
              href="tel:8885550123"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call (888) 555-0123</span>
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>No obligation. No credit check. Get your free quote in under 1 minute.</p>
          </div>
        </div>
      </section>

      {/* Popup CTA */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to see how much your case is worth?
              </h3>
              <p className="text-gray-600 mb-6">
                Get a free quote in 60 seconds. No credit check, no obligation.
              </p>
              <Link
                to="/apply"
                onClick={() => setShowPopup(false)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 block"
              >
                Get Free Quote Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👋</span>
            <div className="hidden lg:block">
              <div className="text-sm font-semibold">Have questions?</div>
              <div className="text-xs">Chat with a real person now</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomePage;