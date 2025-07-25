import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Scale, Users, ArrowRight, CheckCircle } from 'lucide-react';

const ResourcesPage = () => {
  const articles = [
    {
      title: "What is Legal Funding? A Simple Guide",
      excerpt: "Learn the basics of legal funding and how it can help you during your case. We explain everything in simple terms so you can understand how it works.",
      readTime: "5 min read",
      category: "Basics",
      slug: "what-is-legal-funding",
      content: `
        <h2>What is Legal Funding?</h2>
        <p>Legal funding is money we give you while you wait for your case to end. It's not a loan - it's completely different.</p>
        
        <h3>How It's Different From a Loan</h3>
        <ul>
          <li>You only pay us back if you win your case</li>
          <li>If you lose, you owe us nothing</li>
          <li>No monthly payments</li>
          <li>No credit check needed</li>
        </ul>
        
        <h3>Who Can Get Legal Funding?</h3>
        <p>You can get legal funding if:</p>
        <ul>
          <li>You have a legal case going on</li>
          <li>You have a lawyer helping you</li>
          <li>Your case has a good chance of winning</li>
          <li>You need money for bills while you wait</li>
        </ul>
        
        <h3>How Much Money Can You Get?</h3>
        <p>Most people get between $1,000 and $100,000. How much you get depends on your case and how much it might be worth.</p>
        
        <h3>Is It Safe?</h3>
        <p>Yes, legal funding is completely safe for you. We take all the risk. If you lose your case, you don't owe us anything.</p>
      `
    },
    {
      title: "Is Legal Funding Right for You?",
      excerpt: "Find out if legal funding makes sense for your situation. We'll help you understand when it's a good idea and when it might not be.",
      readTime: "7 min read", 
      category: "Decision Guide",
      slug: "is-legal-funding-right-for-you",
      content: `
        <h2>Is Legal Funding Right for You?</h2>
        <p>Legal funding can be really helpful, but it's not right for everyone. Here's how to know if it makes sense for you.</p>
        
        <h3>Legal Funding Might Be Good If:</h3>
        <ul>
          <li>You're struggling to pay bills while waiting for your case</li>
          <li>You might have to settle early because you need money</li>
          <li>Your case is strong and likely to win</li>
          <li>Your lawyer thinks your case is worth good money</li>
          <li>You have medical bills or other urgent expenses</li>
        </ul>
        
        <h3>You Might Not Need Legal Funding If:</h3>
        <ul>
          <li>You can afford to wait for your case to end</li>
          <li>Your case might not win</li>
          <li>Your case isn't worth very much money</li>
          <li>You have other ways to pay your bills</li>
        </ul>
        
        <h3>Questions to Ask Yourself</h3>
        <p>Before you apply, think about these questions:</p>
        <ul>
          <li>Do I really need money right now?</li>
          <li>What does my lawyer think about my case?</li>
          <li>Can I wait for my case to end without money problems?</li>
          <li>Will getting money now help me get a better result in my case?</li>
        </ul>
        
        <h3>Talk to Your Lawyer</h3>
        <p>Your lawyer knows your case best. Ask them what they think about legal funding before you apply.</p>
      `
    }
  ];

  const faqs = [
    {
      question: "Is legal funding right for me?",
      answer: "Legal funding might be right for you if you have a strong case, need money for bills while you wait, and have a lawyer representing you. We know times are tough - that's why we're here to help."
    },
    {
      question: "How much money can I get?",
      answer: "Most people get between $1,000 and $100,000, depending on their case. We'll tell you how much you qualify for after reviewing your case with your lawyer."
    },
    {
      question: "What happens if I lose my case?",
      answer: "If you lose your case, you don't owe us anything. This is completely risk-free for you. We know you're already dealing with enough stress."
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Legal Funding Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about legal funding and how it can help you during your case. 
              Simple guides written for people like you.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Helpful Articles
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about legal funding, explained simply.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500 ml-auto">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="border-t pt-4">
                  <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Quick FAQs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Answers
            </h2>
            <p className="text-xl text-gray-600">
              Fast answers to common questions about legal funding.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/faq"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
            >
              See All Questions & Answers
            </Link>
          </div>
        </div>
      </section>

      {/* State Pages Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Legal Funding by State
            </h2>
            <p className="text-xl text-gray-600">
              Find information specific to your state's legal funding laws.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: 'California', path: '/california' },
              { name: 'Texas', path: '/texas' },
              { name: 'Florida', path: '/florida' },
              { name: 'Illinois', path: '/illinois' },
              { name: 'Georgia', path: '/georgia' }
            ].map((state, index) => (
              <Link
                key={index}
                to={state.path}
                className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
              >
                <Scale className="h-8 w-8 text-blue-500 mx-auto mb-3 group-hover:text-orange-500 transition-colors" />
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">{state.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Legal Funding</p>
                <div className="mt-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-4 w-4 mx-auto" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Apply for Legal Funding?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the money you need in as little as 24 hours. No credit check, no risk to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Apply Now - It's Free
            </Link>
            <a
              href="tel:8885550123"
              className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
            >
              Call (888) 555-0123
            </a>
          </div>
          <div className="mt-6 text-sm text-blue-200">
            <p>Not available in all states. This is non-recourse legal funding. Not a loan.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;