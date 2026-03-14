import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, BookOpen, UserPlus, PhoneCall, Scale, TrendingUp, Users } from 'lucide-react';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-24 lg:py-32 overflow-hidden">
        {/* Professional Background Image (Women Support/Unity from Unsplash) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        
        {/* Deep Gradient Overlay to maintain text readability and theme */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            You Are Not Alone. <br />
            <span className="text-indigo-300">Justice Connect is Here to Help.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-100 font-medium mb-10 text-shadow-sm">
            A secure and accessible platform for reporting abuse, gaining legal knowledge, and seeking immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/file-complaint" className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-2xl flex gap-2 items-center justify-center transform hover:-translate-y-1">
              <ShieldAlert className="w-5 h-5"/> Seek Help Now
            </Link>
            <Link to="/awareness" className="backdrop-blur-sm bg-white/10 border-2 border-indigo-300 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all shadow-xl transform hover:-translate-y-1">
              Understand Your Rights
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white tracking-wide">The Reality of Violence</h2>
            <div className="w-24 h-1 bg-white/60 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-100 font-medium max-w-3xl mx-auto drop-shadow-sm">
              Domestic abuse remains a silent epidemic. Understanding the impact is the first step toward breaking the cycle and seeking justice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-indigo-300 relative z-10">
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 border border-indigo-100">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-5xl font-extrabold text-gray-900 mb-2">1 in 3</h3>
              <p className="text-lg font-bold text-indigo-700 mb-3">Women Worldwide</p>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Experience physical or sexual violence in their lifetime, mostly by an intimate partner.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-300 relative z-10">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 border border-red-100">
                <ShieldAlert className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-5xl font-extrabold text-gray-900 mb-2">86%</h3>
              <p className="text-lg font-bold text-red-600 mb-3">Cases Unreported</p>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                Globally, the vast majority of violence goes unreported due to fear, stigma, or lack of accessible legal support.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-300 relative z-10">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 border border-purple-100">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-5xl font-extrabold text-gray-900 mb-2">+40%</h3>
              <p className="text-lg font-bold text-purple-700 mb-3">Increase in Reporting</p>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">
                When victims are provided with secure, anonymous reporting tools and clear legal guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white tracking-wide">How We Support You</h2>
            <p className="mt-4 text-lg text-gray-100 font-medium drop-shadow-sm">Empowering victims through awareness, reporting, and legal guidance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-300 transform relative z-10 flex flex-col">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4 border border-red-100">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Reporting</h3>
              <p className="text-gray-600 font-medium tracking-wide">Confidential platform to report incidents of physical, emotional, and economic abuse safely.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transform relative z-10 flex flex-col">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 border border-indigo-100">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Guidance</h3>
              <p className="text-gray-600 font-medium tracking-wide">Learn about legal provisions, rights, and punishments detailed under applicable laws like the PWDVA.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-300 transform relative z-10 flex flex-col">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4 border border-green-100">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge Base</h3>
              <p className="text-gray-600 font-medium tracking-wide">Access a library of real-world judgements and educational resources to understand the law.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-yellow-300 transform relative z-10 flex flex-col">
              <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-4 border border-yellow-100">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Support</h3>
              <p className="text-gray-600 font-medium tracking-wide">Quick access to National Helplines and integrated SOS features for critical situations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white tracking-wide">24/7 AI Legal Assistant</h2>
            <div className="w-24 h-1 bg-white/60 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-lg text-gray-100 font-medium max-w-2xl mx-auto drop-shadow-sm">
              Have questions about your rights or need immediate guidance? Ask our AI assistant privately and securely below.
            </p>
          </div>
          <Chatbot inline={true} />
        </div>
      </section>
    </div>
  );
};

export default Home;
