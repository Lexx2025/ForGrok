import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Shield, Award, CheckCircle, Phone, Clock } from 'lucide-react';
import ApplicationForm from '../components/ApplicationForm';

const AboutUsPage = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Compassionate Service",
      description: "We understand you're going through a difficult time. Our team treats every client with respect and empathy."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Transparent Process", 
      description: "No hidden fees or surprises. We explain everything upfront so you know exactly what to expect."
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Personal Attention",
      description: "You're not just a number to us. Every client gets personal attention from our experienced team."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Industry Expertise",
      description: "With years of experience in legal funding, we understand the complexities of personal injury cases."
    }
  ];

  const promises = [
    "We will always be honest about your case prospects",
    "We will explain all terms and fees clearly before you sign",  
    "We will respect your privacy and keep your information confidential",
    "We will work quickly to get you the money you need",
    "We will never pressure you into taking funding you don't need",
    "We will be available to answer your questions throughout the process"
  ];

  const stats = [
    { number: "10,000+", label: "Clients Helped" },
    { number: "$50M+", label: "Funding Provided" },
    { number: "24 Hours", label: "Average Approval Time" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About WhiteBridge - We Help People Like You
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help people get money when they need it most. When you're hurt and waiting for your case to end, 
              we give you money so you don't have to worry about paying bills.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why We Started WhiteBridge
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <Users className="h-24 w-24 text-gray-400" />
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>We started WhiteBridge to help people who are in pain and waiting for justice.</strong> We believe no one should be forced to settle early just because they can't pay their bills.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Legal cases take a long time - sometimes years. During this time, medical bills pile up, people can't work, and families struggle to pay for basic things like rent and food.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Insurance companies know this and try to pressure people into taking less money. We give you the power to wait for what you deserve by helping you pay your bills while you wait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            "We help injured people get the money they need while they wait for justice. 
            We believe everyone deserves a fair chance to fight for what's right, 
            without having to worry about paying bills."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="p-4 bg-blue-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">We Care About You</h3>
              <p className="text-blue-100 text-sm">Every person matters to us</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-blue-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">We Keep You Safe</h3>
              <p className="text-blue-100 text-sm">No risk to you ever</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-blue-800 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">We Work Fast</h3>
              <p className="text-blue-100 text-sm">Money when you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We've Helped People
            </h2>
            <p className="text-xl text-gray-600">
              Here's how we've helped people all across America:
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "People We've Helped" },
              { number: "$50M+", label: "Money We've Given" },
              { number: "24 Hours", label: "Average Time to Get Money" },
              { number: "97%", label: "Happy Clients" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Believe In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the things that are most important to us:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-red-500" />,
                title: "We Care About You",
                description: "We know you're going through a hard time. We treat every person with kindness and respect."
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-500" />,
                title: "We Tell the Truth", 
                description: "No tricks or hidden costs. We explain everything clearly so you understand what's happening."
              },
              {
                icon: <Users className="h-8 w-8 text-green-500" />,
                title: "We Give Personal Help",
                description: "You're not just a number to us. Every person gets personal attention from our team."
              },
              {
                icon: <Award className="h-8 w-8 text-orange-500" />,
                title: "We Know What We're Doing",
                description: "We've been helping people for years. We understand legal cases and how to help you."
              }
            ].map((value, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Promise to You
            </h2>
            <p className="text-xl text-blue-100">
              When you work with WhiteBridge, here's what we promise you:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "We will always tell you the truth about your case",
              "We will explain all costs clearly before you sign anything",  
              "We will keep your information private and safe",
              "We will work fast to get you the money you need",
              "We will never pressure you into taking money you don't need",
              "We will always be here to answer your questions"
            ].map((promise, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-blue-100 text-lg">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The People Who Run WhiteBridge
            </h2>
            <p className="text-xl text-gray-600">
              Meet the people who started our company and help people every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-orange-500 font-semibold mb-3">Company Leader</p>
              <p className="text-gray-600 text-sm">
                Used to be a lawyer for 15+ years. Knows all about injury cases and helping people get money.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-orange-500 font-semibold mb-3">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Has been helping people get money for 10+ years. Really good at looking at cases and deciding how much to give.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lisa Rodriguez</h3>
              <p className="text-orange-500 font-semibold mb-3">Client Care Director</p>
              <p className="text-gray-600 text-sm">
                Has been taking care of clients for 12+ years. Makes sure every person who calls us gets great help.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team Promise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700"><strong>10+ years</strong> combined experience in legal and finance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700"><strong>U.S.-based team</strong> that speaks your language</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Passionate</strong> about helping injury victims</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you through this difficult time. Contact us today to learn 
                how we can help you get the money you need.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-500 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:8885550123" className="text-blue-600 hover:text-blue-700">
                      (888) 555-0123
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@whitebridgelegal.com" className="text-blue-600 hover:text-blue-700">
                      info@whitebridgelegal.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      123 Legal Plaza, Suite 456<br />
                      Los Angeles, CA 90210
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ApplicationForm 
                title="Get Your Money Today"
                subtitle="Apply now and get funded in 24-48 hours"
                showPhoneNumber={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We're Here to Help
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Going through a legal case is stressful enough. Let us take the financial pressure off 
            your shoulders so you can focus on getting better and getting justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
            >
              Apply Now - It's Free
            </Link>
            <a
              href="tel:8885550123"
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
            >
              Call (888) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;