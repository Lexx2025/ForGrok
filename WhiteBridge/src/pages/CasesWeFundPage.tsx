import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Users, Briefcase, Heart, AlertTriangle, Scale, CheckCircle } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

const CasesWeFundPage = () => {
  const caseTypes = [
    {
      icon: <Car className="h-12 w-12 text-blue-500" />,
      title: "Car Accidents",
      description: "If you were hurt in a car crash, we can help. This includes when someone hit you from behind, drunk drivers, or big accidents with many cars.",
      examples: [
        "Someone hit you from behind",
        "Head-on crashes", 
        "Side crashes",
        "Drunk driver hit you",
        "Hit and run accidents",
        "Driver had no insurance"
      ],
      averageFunding: "$5,000 - $50,000"
    },
    {
      icon: <Users className="h-12 w-12 text-green-500" />,
      title: "Slip and Fall",
      description: "If you got hurt because a place was dangerous, we can help. This means you fell or got hurt at a store, restaurant, or someone's property.",
      examples: [
        "Slipped on wet floor",
        "Fell on icy sidewalk",
        "Stairs or escalator broke", 
        "Too dark to see danger",
        "Broken handrails",
        "Construction site dangers"
      ],
      averageFunding: "$2,000 - $25,000"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-orange-500" />,
      title: "Workers Compensation",
      description: "If you got hurt at work, we can give you money while you wait for workers comp. This includes injuries from your job or getting sick from work.",
      examples: [
        "Back and neck injuries",
        "Hurt from doing same thing over and over",
        "Got sick from chemicals at work",
        "Machinery accidents",
        "Construction accidents",
        "Got sick from your job"
      ],
      averageFunding: "$3,000 - $40,000"
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Medical Malpractice",
      description: "If a doctor or hospital made a mistake that hurt you, we can help. This includes wrong diagnosis, surgery mistakes, or other medical errors.",
      examples: [
        "Doctor made mistake in surgery",
        "Doctor said wrong thing was wrong with you",
        "Medication errors",
        "Birth injuries",
        "Hospital negligence",
        "Problems with anesthesia"
      ],
      averageFunding: "$10,000 - $100,000"
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-yellow-500" />,
      title: "Wrongful Death",
      description: "If someone you love died because of someone else's mistake, we can help your family get money while you wait for justice.",
      examples: [
        "Fatal car accidents",
        "Doctor mistakes that caused death",
        "Workplace fatalities",
        "Dangerous products that killed someone",
        "Nursing home neglect",
        "Someone hurt your loved one on purpose"
      ],
      averageFunding: "$15,000 - $100,000"
    },
    {
      icon: <Scale className="h-12 w-12 text-purple-500" />,
      title: "Personal Injury",
      description: "Other ways people get hurt including dog attacks, dangerous products, bike accidents, and when someone hurts you on purpose.",
      examples: [
        "Dog bite attacks",
        "Dangerous products that hurt you",
        "Bicycle accidents",
        "Got hit while walking",
        "Nursing home abuse",
        "Someone attacked you"
      ],
      averageFunding: "$1,000 - $75,000"
    }
  ];

  const requirements = [
    "You must have a lawyer helping you",
    "Your case must have a good chance of winning",
    "The person who hurt you must have money or insurance",
    "Your case should be able to settle or win"
  ];

  const notFunded = [
    "Criminal cases",
    "Divorce and family problems",
    "Bankruptcy", 
    "Job discrimination (in some states)",
    "Cases where it's not clear who's at fault",
    "Big group lawsuits"
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Kind of Cases Do We Help With?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help people with many different types of cases. If someone hurt you and you have a lawyer, 
              we can probably help you get money while you wait.
            </p>
          </div>
        </div>
      </section>

      {/* Case Types Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseTypes.map((caseType, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gray-100 rounded-lg mr-4">
                    {caseType.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{caseType.title}</h3>
                    <p className="text-orange-500 font-semibold">{caseType.averageFunding}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{caseType.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common Examples:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseType.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/apply"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Apply for This Case Type
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Do You Qualify for Money?
            </h2>
            <p className="text-xl text-gray-600">
              Here's what we look for to help you:
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What We Fund */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">✅ We Can Help If:</h3>
              </div>
              <p className="text-gray-600 mb-6">
                To get money from us, you need these things:
              </p>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{requirement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  to="/apply"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-lg"
                >
                  See If We Can Help You
                </Link>
              </div>
            </div>

            {/* What We Don't Fund */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 border-2 border-red-500 rounded-full mr-3 flex items-center justify-center">
                  <div className="h-4 w-4 bg-red-500 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">❌ We Can't Help With:</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We can't give money for these types of cases:
              </p>
              <ul className="space-y-3">
                {notFunded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 border-2 border-red-300 rounded-full mr-3 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="h-2 w-2 bg-red-300 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Not sure about your case? Call us at{' '}
                  <a href="tel:8885550123" className="text-blue-600 hover:text-blue-700 font-semibold">
                    (888) 555-0123
                  </a>{' '}
                  and we'll tell you if we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Much Can You Get */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Much Money Can You Get?
            </h2>
            <p className="text-xl text-gray-600">
              How much money you get depends on how strong your case is and how much it might be worth.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">$500</div>
                <div className="text-gray-700 font-semibold">Smallest Amount</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">$15,000</div>
                <div className="text-gray-700 font-semibold">Most People Get</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">$100,000</div>
                <div className="text-gray-700 font-semibold">Biggest Amount</div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                Most people get between $2,000 and $25,000. If your case is really strong and worth a lot, 
                you might get more money.
              </p>
              <p className="text-sm text-gray-500">
                How much you get depends on what we think about your case and what your lawyer says.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apply for Legal Funding Today
            </h2>
            <p className="text-xl text-gray-600">
              Get the money you need in as little as 24 hours. No credit check required.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <ApplicationForm 
              title="Get Your Money Now"
              subtitle="Find out how much you can get for your case"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Not Sure If Your Case Qualifies?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call us now to speak with a legal funding specialist about your specific case.
          </p>
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

export default CasesWeFundPage;