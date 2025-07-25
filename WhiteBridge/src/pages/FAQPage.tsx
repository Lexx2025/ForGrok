import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "💰 Money Questions",
      questions: [
        {
          question: "How much money can I get?",
          answer: "You can get anywhere from $500 to $100,000. Most people get between $2,000 and $25,000. How much you get depends on how strong your case is and how much it might be worth."
        },
        {
          question: "How fast can I get the money?",
          answer: "Most people get their money in 1-2 days after we approve them. Sometimes we can get you money the same day if you really need it fast."
        },
        {
          question: "Do you check my credit?",
          answer: "No, we don't check your credit at all. Your credit score doesn't matter to us. We only care about your legal case, not your credit history."
        },
        {
          question: "What can I use the money for?",
          answer: "You can use the money for anything you need - rent, food, medical bills, car payments, or anything else. There are no rules about how you spend it."
        }
      ]
    },
    {
      category: "⚖️ Legal & Case Questions",
      questions: [
        {
          question: "Do I need a lawyer to get money?",
          answer: "Yes, you must have a lawyer helping you with your case. We work with your lawyer to understand your case. If you don't have a lawyer yet, we can help you find one."
        },
        {
          question: "What kinds of cases do you help with?",
          answer: "We help with car accidents, slip and falls, work injuries, medical mistakes, wrongful death, and other injury cases. We don't help with criminal cases, divorce, or bankruptcy."
        },
        {
          question: "Will this hurt my case or my lawyer?",
          answer: "No, getting money from us won't hurt your case at all. Your lawyer stays in complete control of your case. We just give you money while you wait."
        },
        {
          question: "How do I apply?",
          answer: "Just fill out our simple form online or call us at (888) 555-0123. It takes less than 5 minutes. We need your name, phone number, what kind of case you have, and your lawyer's name."
        }
      ]
    },
    {
      category: "📅 Timeline & Repayment",
      questions: [
        {
          question: "Is this a loan?",
          answer: "No, this is not a loan. We give you money now, and you only pay us back if you win your case. If you lose your case, you don't owe us anything."
        },
        {
          question: "What if I lose my case?",
          answer: "If you lose your case, you don't owe us any money at all. This is completely safe for you. We only get paid if you win. All the risk is on us, not you."
        },
        {
          question: "Do I make monthly payments?",
          answer: "No, you don't make any monthly payments. You don't pay us anything until your case is over. When you win, we get paid from your settlement money through your lawyer."
        },
        {
          question: "How much do I have to pay back?",
          answer: "How much you pay back depends on how long your case takes and what we agreed on. We'll tell you exactly what you'll owe before you take the money. No surprises or hidden fees."
        },
        {
          question: "Can I pay you back early?",
          answer: "Yes, you can pay us back anytime without penalty. If your case ends quickly or you get money from somewhere else, you can pay us back early and might save money on fees."
        }
      ]
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Questions People Ask Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are answers to questions people ask us all the time. 
              If you don't see your question, just call us at (888) 555-0123.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-orange-500">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 100 + questionIndex;
                  return (
                    <div key={questionIndex} className="bg-white rounded-xl shadow-sm border border-gray-200">
                      <button
                        onClick={() => setOpenFAQ(openFAQ === faqIndex ? null : faqIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <span className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        {openFAQ === faqIndex ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      {openFAQ === faqIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Facts About Legal Funding
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-orange-500 mb-2">24-48 Hours</div>
              <div className="text-gray-600">Average time to get your money</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-500 mb-2">No Credit Check</div>
              <div className="text-gray-600">Your credit doesn't matter</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-500 mb-2">Risk-Free</div>
              <div className="text-gray-600">Pay nothing if you lose</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-500 mb-2">$500 - $100K</div>
              <div className="text-gray-600">Funding range available</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-teal-500 mb-2">No Monthly Payments</div>
              <div className="text-gray-600">Pay only when case settles</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-red-500 mb-2">Use for Anything</div>
              <div className="text-gray-600">No restrictions on spending</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600">
                Our legal funding specialists are here to help. Get personalized answers about your specific situation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:8885550123"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call (888) 555-0123</span>
              </a>
              <Link
                to="/apply"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg text-center"
              >
                Apply Now - It's Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600">
              Get the money you need in as little as 24 hours. The application takes less than 5 minutes.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <ApplicationForm 
              title="Apply for Legal Funding"
              subtitle="Get up to $100,000 with no credit check"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;